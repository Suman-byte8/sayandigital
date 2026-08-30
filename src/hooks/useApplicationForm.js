import { useMemo, useState } from 'react'
import { useTranslation } from '../i18n/I18nContext.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// 10-digit Indian mobile number, optionally starting with spaces
const PHONE_RE = /^[6-9]\d{9}$/
const PHONE_FIELDS = new Set(['mobile', 'whatsapp', 'alternate'])

// Seed default values (e.g. the disabled puja year) from whichever
// language is active at mount — the field itself is read-only, so this
// only needs to be correct for the starting language, same as any other
// value already on screen when the user switches languages later.
function initialValues(t) {
  const pujaYear = t.pujaSection.fields.find((f) => f.name === 'pujaYear')
  return { pujaYear: pujaYear?.defaultValue || '' }
}

export function useApplicationForm() {
  const { t } = useTranslation()
  const [values, setValues] = useState(() => initialValues(t))
  const [awards, setAwards] = useState([])
  const [errors, setErrors] = useState({}) // { fieldName: 'translated message' }
  const [awardsError, setAwardsError] = useState('')

  // Field config is language-dependent (labels/placeholders differ), but
  // `name`/`type`/`required`/`min`/`max` are identical across languages —
  // so switching language never changes which fields exist or are required.
  const ALL_FIELDS = useMemo(
    () => [t.committeeSection, t.applicantSection, t.pujaSection].flatMap((s) => s.fields),
    [t]
  )
  const REQUIRED_FIELDS = useMemo(
    () => ALL_FIELDS.filter((f) => f.required).map((f) => f.name),
    [ALL_FIELDS]
  )
  const TOTAL_REQUIRED = REQUIRED_FIELDS.length

  const setField = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name] && String(value).trim()) {
      setErrors((e) => {
        const next = { ...e }
        delete next[name]
        return next
      })
    }
  }

  const toggleAward = (value) => {
    setAwards((list) =>
      list.includes(value) ? list.filter((x) => x !== value) : [...list, value]
    )
    setAwardsError('')
  }

  // Progress: completed required fields + valid award selection
  const progress = useMemo(() => {
    const done = REQUIRED_FIELDS.filter((n) => String(values[n] || '').trim()).length
    const pct = Math.min(100, (done / TOTAL_REQUIRED) * 100)
    const stepIndex = Math.min(6, Math.max(1, Math.ceil((done / TOTAL_REQUIRED) * 6)))
    return { pct, stepIndex, done, total: TOTAL_REQUIRED }
  }, [values, REQUIRED_FIELDS, TOTAL_REQUIRED])

  // Validates every field against the type/shape declared in the active
  // translation bundle — the form is noValidate, so the browser never
  // enforces this for us. Format checks only run once a value is present
  // so optional fields (e.g. alternate contact) don't block submission.
  const validate = () => {
    const nextErrors = {}
    const MESSAGES = t.validation

    REQUIRED_FIELDS.forEach((name) => {
      if (!String(values[name] || '').trim()) nextErrors[name] = MESSAGES.required
    })

    ALL_FIELDS.forEach((field) => {
      if (nextErrors[field.name]) return // already failed the required check

      const value = String(values[field.name] || '').trim()
      if (!value) return

      if (field.type === 'number') {
        const num = Number(value)
        if (Number.isNaN(num)) {
          nextErrors[field.name] = MESSAGES.number
        } else if (field.min != null && num < field.min) {
          nextErrors[field.name] = MESSAGES.minValue(field.min)
        } else if (field.max != null && num > field.max) {
          nextErrors[field.name] = MESSAGES.maxValue(field.max)
        }
      } else if (field.type === 'date') {
        if (Number.isNaN(Date.parse(value))) nextErrors[field.name] = MESSAGES.date
      } else if (field.type === 'email') {
        if (!EMAIL_RE.test(value)) nextErrors[field.name] = MESSAGES.email
      } else if (field.name === 'pin') {
        if (!/^\d{6}$/.test(value)) nextErrors[field.name] = MESSAGES.pin
      } else if (PHONE_FIELDS.has(field.name)) {
        if (!PHONE_RE.test(value.replace(/\s+/g, ''))) nextErrors[field.name] = MESSAGES.mobile
      }
    })

    // Puja can't end before it starts
    if (
      values.startDate &&
      values.endDate &&
      !nextErrors.startDate &&
      !nextErrors.endDate &&
      new Date(values.endDate) < new Date(values.startDate)
    ) {
      nextErrors.endDate = MESSAGES.dateRange
    }

    const validAwards = awards.length > 0
    setAwardsError(validAwards ? '' : MESSAGES.awardsRequired)

    setErrors(nextErrors)

    // First invalid field in document order, so the caller can scroll to it.
    const firstErrorField = ALL_FIELDS.find((f) => nextErrors[f.name])?.name || null

    return { ok: Object.keys(nextErrors).length === 0 && validAwards, firstErrorField }
  }

  const getValue = (name) => (values[name] ? values[name] : '—')

  // Back to a pristine form (called after a successful submission).
  const reset = () => {
    setValues(initialValues(t))
    setAwards([])
    setErrors({})
    setAwardsError('')
  }

  return {
    values,
    awards,
    errors,
    awardsError,
    progress,
    setField,
    toggleAward,
    validate,
    getValue,
    reset,
  }
}
