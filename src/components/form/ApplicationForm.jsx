import { useRef, useState } from 'react'
import { useTranslation } from '../../i18n/I18nContext.jsx'
import { useApplicationForm } from '../../hooks/useApplicationForm.js'
import { printAcknowledgement } from '../../utils/helpers.js'
import { submitForm, createPaymentOrder, reportPaymentFailure } from '../../lib/forms.js'
import { loadRazorpayScript, openRazorpayCheckout } from '../../lib/razorpay.js'
import { APPLICATIONS_OPEN, APPLICATIONS_OPEN_DATE } from '../../data/content.js'

import ProgressBar from './ProgressBar.jsx'
import FormSection from './FormSection.jsx'
import AwardsSection from './AwardsSection.jsx'
import DocumentsSection from './DocumentsSection.jsx'
import Declaration from './Declaration.jsx'
import ReviewModal from '../modals/ReviewModal.jsx'
import ProcessingModal from '../modals/ProcessingModal.jsx'
import SuccessModal from '../modals/SuccessModal.jsx'
import FailureModal from '../modals/FailureModal.jsx'

// Must match the FORMS key in Code.gs
const FORM_TYPE = 'application'

export default function ApplicationForm() {
  const { t, lang } = useTranslation()
  const form = useApplicationForm()
  const [agreed, setAgreed] = useState(false)
  const [website, setWebsite] = useState('') // honeypot — real users never fill this
  const [reviewOpen, setReviewOpen] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)
  const [applicationId, setApplicationId] = useState('')
  const [paymentId, setPaymentId] = useState('')
  const [submitting, setSubmitting] = useState(false)
  // failure.retryable is false only when a payment was actually charged
  // and the save afterwards failed — never offer to "retry" that, it
  // would risk charging the applicant a second time.
  const [failure, setFailure] = useState(null) // { message, retryable, paymentId? } | null
  const [docFiles, setDocFiles] = useState({}) // { doc1, doc3: File | null }
  const [formKey, setFormKey] = useState(0) // bump to remount <form> & clear native file inputs
  const formRef = useRef(null)

  const handleDocFile = (docId, file) =>
    setDocFiles((prev) => ({ ...prev, [docId]: file }))

  // Scrolls straight to the exact field that failed — by name, not a
  // brittle Tailwind error-border class — falling back to the awards
  // section when the only problem is "no award category selected".
  const scrollToError = (firstErrorField) => {
    const target = firstErrorField
      ? document.querySelector(`[name="${firstErrorField}"]`)
      : document.getElementById('awards-section')
    target?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    target?.focus?.({ preventScroll: true })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { ok, firstErrorField } = form.validate()
    if (!ok) {
      scrollToError(firstErrorField)
      return
    }
    setReviewOpen(true)
  }

  // Sends the form + files to the backend along with the Razorpay payment
  // proof. Code.gs re-verifies the payment before it saves anything, so a
  // forged/incomplete payment object simply gets rejected server-side.
  // `language` travels with the submission so the backend can send the
  // confirmation email in the same language the applicant used here.
  const finalizeSubmission = async (payment) => {
    try {
      const files = {}
      Object.entries(docFiles).forEach(([field, file]) => {
        if (file) files[field] = file
      })

      const result = await submitForm(
        FORM_TYPE,
        {
          ...form.values,
          awards: form.awards,
          website,
          language: lang,
          razorpayOrderId: payment.razorpay_order_id,
          razorpayPaymentId: payment.razorpay_payment_id,
          razorpaySignature: payment.razorpay_signature,
        },
        files,
        lang
      )

      if (!result.ok) {
        setReviewOpen(false)
        // Money has already been charged at this point — never offer a
        // retry (no onRetry), and surface the payment ID so support can
        // find it.
        setFailure({
          message: result.error || t.ui.payment.savedFailedAfterCharge,
          retryable: false,
          paymentId: payment.razorpay_payment_id,
        })
        return
      }

      setApplicationId(result.id)
      setPaymentId(payment.razorpay_payment_id)
      setReviewOpen(false)
      setSuccessOpen(true)
    } finally {
      setSubmitting(false)
    }
  }

  const handleConfirm = async () => {
    if (submitting) return

    // Belt-and-braces: re-validate right before money changes hands. The
    // form fields are unreachable while this modal is open so nothing
    // should have changed since handleSubmit's check, but a payment that
    // succeeds against an incomplete application is a real support
    // headache — never open Razorpay Checkout on stale/bad state.
    const { ok, firstErrorField } = form.validate()
    if (!ok) {
      setReviewOpen(false)
      scrollToError(firstErrorField)
      return
    }

    setSubmitting(true)

    const order = await createPaymentOrder(lang)
    if (!order.ok) {
      setReviewOpen(false)
      setSubmitting(false)
      setFailure({ message: order.error || t.ui.payment.orderFailed, retryable: true })
      return
    }

    const scriptLoaded = await loadRazorpayScript()
    if (!scriptLoaded) {
      setReviewOpen(false)
      setSubmitting(false)
      setFailure({ message: t.ui.payment.gatewayLoadFailed, retryable: true })
      return
    }

    // Hand off to Razorpay's own full-screen overlay right as it opens —
    // everything behind it is invisible until it closes, so this is the
    // right moment to swap away from the review table. On success this
    // leaves ProcessingModal showing underneath while the application
    // saves, instead of the review table flashing back into view.
    setReviewOpen(false)

    openRazorpayCheckout({
      keyId: order.keyId,
      orderId: order.orderId,
      amount: order.amount,
      currency: order.currency,
      name: t.brand.event,
      description: t.ui.payment.itemDescription(form.getValue('clubName'), t.applicationFee.label),
      prefill: {
        name: form.getValue('applicant'),
        email: form.values.email || '',
        contact: form.values.mobile || '',
      },
      onSuccess: (response) => finalizeSubmission(response),
      onDismiss: () => {
        setSubmitting(false)
        setFailure({ message: t.ui.payment.dismissed, retryable: true })
      },
      onFailure: (response) => {
        setSubmitting(false)
        setFailure({
          message: t.ui.payment.failed(response?.error?.description),
          retryable: true,
        })

        // A genuine declined/failed charge attempt (has a real payment_id
        // on Razorpay's side) — report it so the backend can independently
        // verify it via Razorpay's API and email the applicant. Fire and
        // forget: this must never block or fail the UI the user sees.
        const failedPaymentId = response?.error?.metadata?.payment_id
        const failedOrderId = response?.error?.metadata?.order_id
        if (failedPaymentId) {
          reportPaymentFailure({
            razorpayPaymentId: failedPaymentId,
            razorpayOrderId: failedOrderId,
            applicant: form.getValue('applicant'),
            clubName: form.getValue('clubName'),
            email: form.values.email || '',
            language: lang,
          }).catch(() => {})
        }
      },
    })
  }

  const handleCloseFailure = () => setFailure(null)

  const handleRetry = () => {
    setFailure(null)
    setReviewOpen(true)
  }

  const handleCloseSuccess = () => {
    setSuccessOpen(false)
    // Full reset: hook state + consent + honeypot + hoisted files,
    // and a remount so the uncontrolled file inputs clear as well.
    form.reset()
    setAgreed(false)
    setWebsite('')
    setDocFiles({})
    setApplicationId('')
    setPaymentId('')
    formRef.current?.reset()
    setFormKey((k) => k + 1)
  }

  const handlePrint = () => {
    printAcknowledgement({
      id: applicationId,
      club: form.getValue('clubName'),
      applicant: form.getValue('applicant'),
      mobile: form.getValue('mobile'),
      lang,
    })
  }

  return (
    <>
      {!APPLICATIONS_OPEN && (
        <div className="w-full mb-6 bg-[#fdecee] border-2 border-[#a3444e] rounded-[12px] px-6 py-5 flex gap-4 items-start shadow-[0_10px_30px_#a3444e1f]">
          <div className="bg-[#9f3744] text-white w-[38px] h-[38px] text-lg rounded-full grid place-items-center font-extrabold flex-none">
            !
          </div>
          <div>
            <strong className="text-lg text-[#7a1f2b] block">{t.ui.previewBanner.title}</strong>
            <p className="mt-1 text-sm font-medium text-[#8e303b]">
              {APPLICATIONS_OPEN_DATE
                ? t.ui.previewBanner.textWithDate(APPLICATIONS_OPEN_DATE)
                : t.ui.previewBanner.textNoDate}
            </p>
          </div>
        </div>
      )}

      <div className="bg-white border border-[#e7ddd4] rounded-[18px] shadow-[0_20px_70px_#4820170c] overflow-hidden">
        <ProgressBar pct={form.progress.pct} stepIndex={form.progress.stepIndex} />

        <form key={formKey} ref={formRef} onSubmit={handleSubmit} noValidate>
          {/* Honeypot — visually hidden; bots fill it, humans never see it */}
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="absolute -left-[9999px]"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          {/* While applications are closed, disabling the fieldset natively
              disables every descendant control (inputs/selects/textareas/
              checkboxes/file inputs/submit button) — the form renders as a
              read-only preview and can't be submitted. */}
          <fieldset disabled={!APPLICATIONS_OPEN} className="contents">
            <FormSection
              section={t.committeeSection}
              values={form.values}
              errors={form.errors}
              onChange={form.setField}
            />
            <FormSection
              section={t.applicantSection}
              values={form.values}
              errors={form.errors}
              onChange={form.setField}
            />
            <FormSection
              section={t.pujaSection}
              values={form.values}
              errors={form.errors}
              onChange={form.setField}
            />
            <AwardsSection
              selected={form.awards}
              error={form.awardsError}
              onToggle={form.toggleAward}
            />
            <DocumentsSection onDocFile={handleDocFile} />
            <Declaration agreed={agreed} onAgreeChange={setAgreed} />
          </fieldset>
        </form>
      </div>

      <ReviewModal
        open={reviewOpen}
        onClose={() => setReviewOpen(false)}
        onConfirm={handleConfirm}
        getValue={form.getValue}
        awards={form.awards}
        submitting={submitting}
      />
      {/* Bridges the gap between Razorpay's overlay closing and the
          backend finishing the save — without it the review table would
          flash back into view while files are still uploading. */}
      <ProcessingModal open={submitting && !reviewOpen && !successOpen && !failure} />
      <SuccessModal
        open={successOpen}
        onClose={handleCloseSuccess}
        applicationId={applicationId}
        paymentId={paymentId}
        onPrint={handlePrint}
      />
      <FailureModal
        open={!!failure}
        onClose={handleCloseFailure}
        message={failure?.message}
        paymentId={failure?.paymentId}
        onRetry={failure?.retryable ? handleRetry : undefined}
      />
    </>
  )
}
