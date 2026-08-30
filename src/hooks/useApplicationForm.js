import { useMemo, useState } from 'react'
import {
  COMMITTEE_SECTION,
  APPLICANT_SECTION,
  PUJA_SECTION,
} from '../data/content.js'

// Flattened field config from every section, in document order — reused
// both to derive required fields and to drive type-based validation.
const ALL_FIELDS = [COMMITTEE_SECTION, APPLICANT_SECTION, PUJA_SECTION].flatMap(
  (s) => s.fields
)

const REQUIRED_FIELDS = ALL_FIELDS.filter((f) => f.required).map((f) => f.name)

const TOTAL_REQUIRED = REQUIRED_FIELDS.length

// Seed default values (e.g. disabled puja year)
const INITIAL = { pujaYear: '২০২৬' }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// 10-digit Indian mobile number, optionally starting with spaces
const PHONE_RE = /^[6-9]\d{9}$/
const PHONE_FIELDS = new Set(['mobile', 'whatsapp', 'alternate'])

// Bengali validation messages shown under each field by Field.jsx
const MESSAGES = {
  required: 'এই ঘরটি পূরণ করুন।',
  mobile: 'সঠিক ১০ সংখ্যার মোবাইল নম্বর লিখুন (৬–৯ দিয়ে শুরু)।',
  pin: 'সঠিক ৬ সংখ্যার পিন কোড লিখুন।',
  email: 'সঠিক ইমেল ঠিকানা লিখুন।',
  number: 'সঠিক সংখ্যা লিখুন।',
  date: 'সঠিক তারিখ নির্বাচন করুন।',
  dateRange: 'শেষের তারিখ শুরুর তারিখের আগে হতে পারে না।',
}

export function useApplicationForm() {
  const [values, setValues] = useState(INITIAL)
  const [awards, setAwards] = useState([])
  const [errors, setErrors] = useState({}) // { fieldName: 'বাংলা বার্তা' }
  const [awardsError, setAwardsError] = useState('')

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
  }, [values])

  // Validates every field against the type/shape declared in content.js —
  // the form is noValidate, so the browser never enforces this for us.
  // Format checks only run once a value is present so optional fields
  // (e.g. alternate contact) don't block submission when left blank.
  const validate = () => {
    const nextErrors = {}

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
          nextErrors[field.name] = `মান কমপক্ষে ${field.min} হতে হবে।`
        } else if (field.max != null && num > field.max) {
          nextErrors[field.name] = `মান সর্বোচ্চ ${field.max} হতে পারে।`
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
    setAwardsError(validAwards ? '' : 'কমপক্ষে একটি সম্মান বিভাগ নির্বাচন করুন।')

    setErrors(nextErrors)

    // First invalid field in document order, so the caller can scroll to it.
    const firstErrorField = ALL_FIELDS.find((f) => nextErrors[f.name])?.name || null

    return { ok: Object.keys(nextErrors).length === 0 && validAwards, firstErrorField }
  }

  const getValue = (name) => (values[name] ? values[name] : '—')

  // Back to a pristine form (called after a successful submission).
  const reset = () => {
    setValues(INITIAL)
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
