import { useState } from 'react'
import {
  COMMITTEE_SECTION,
  APPLICANT_SECTION,
  PUJA_SECTION,
} from '../../data/content.js'
import { useApplicationForm } from '../../hooks/useApplicationForm.js'
import { generateApplicationId, printAcknowledgement } from '../../utils/helpers.js'

import ProgressBar from './ProgressBar.jsx'
import FormSection from './FormSection.jsx'
import AwardsSection from './AwardsSection.jsx'
import DocumentsSection from './DocumentsSection.jsx'
import Declaration from './Declaration.jsx'
import ReviewModal from '../modals/ReviewModal.jsx'
import SuccessModal from '../modals/SuccessModal.jsx'

export default function ApplicationForm() {
  const form = useApplicationForm()
  const [agreed, setAgreed] = useState(false)
  const [reviewOpen, setReviewOpen] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)
  const [applicationId, setApplicationId] = useState('SS2026-000000')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.validate()) {
      // Scroll to the first field with an error
      const firstError = document.querySelector('.border-\\[\\#bd4a52\\]')
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setReviewOpen(true)
  }

  const handleConfirm = () => {
    setApplicationId(generateApplicationId())
    setReviewOpen(false)
    setSuccessOpen(true)
  }

  const handlePrint = () => {
    printAcknowledgement({
      id: applicationId,
      club: form.getValue('clubName'),
      applicant: form.getValue('applicant'),
      mobile: form.getValue('mobile'),
    })
  }

  return (
    <>
      <div className="bg-white border border-[#e7ddd4] rounded-[18px] shadow-[0_20px_70px_#4820170c] overflow-hidden">
        <ProgressBar pct={form.progress.pct} stepIndex={form.progress.stepIndex} />

        <form onSubmit={handleSubmit} noValidate>
          <FormSection
            section={COMMITTEE_SECTION}
            values={form.values}
            errors={form.errors}
            onChange={form.setField}
          />
          <FormSection
            section={APPLICANT_SECTION}
            values={form.values}
            errors={form.errors}
            onChange={form.setField}
          />
          <FormSection
            section={PUJA_SECTION}
            values={form.values}
            errors={form.errors}
            onChange={form.setField}
          />
          <AwardsSection
            selected={form.awards}
            error={form.awardsError}
            onToggle={form.toggleAward}
          />
          <DocumentsSection />
          <Declaration agreed={agreed} onAgreeChange={setAgreed} />
        </form>
      </div>

      <ReviewModal
        open={reviewOpen}
        onClose={() => setReviewOpen(false)}
        onConfirm={handleConfirm}
        getValue={form.getValue}
        awards={form.awards}
      />
      <SuccessModal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        applicationId={applicationId}
        onPrint={handlePrint}
      />
    </>
  )
}
