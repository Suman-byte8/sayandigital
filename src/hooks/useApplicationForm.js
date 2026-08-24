import { useMemo, useState } from 'react'
import {
  COMMITTEE_SECTION,
  APPLICANT_SECTION,
  PUJA_SECTION,
} from '../data/content.js'

// Collect the list of required field names from the config-driven sections
const REQUIRED_FIELDS = [COMMITTEE_SECTION, APPLICANT_SECTION, PUJA_SECTION]
  .flatMap((s) => s.fields)
  .filter((f) => f.required)
  .map((f) => f.name)

const TOTAL_REQUIRED = REQUIRED_FIELDS.length

// Seed default values (e.g. disabled puja year)
const INITIAL = { pujaYear: '২০২৬' }

export function useApplicationForm() {
  const [values, setValues] = useState(INITIAL)
  const [awards, setAwards] = useState([])
  const [errors, setErrors] = useState({}) // { fieldName: true }
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

  const validate = () => {
    const nextErrors = {}
    REQUIRED_FIELDS.forEach((name) => {
      if (!String(values[name] || '').trim()) nextErrors[name] = true
    })

    // Mobile: Indian 10-digit starting 6-9
    const mobile = String(values.mobile || '').replace(/\s+/g, '')
    if (mobile && !/^[6-9]\d{9}$/.test(mobile)) nextErrors.mobile = true

    // PIN: 6 digits
    const pin = String(values.pin || '').trim()
    if (pin && !/^\d{6}$/.test(pin)) nextErrors.pin = true

    const validAwards = awards.length > 0
    setAwardsError(validAwards ? '' : 'কমপক্ষে একটি সম্মান বিভাগ নির্বাচন করুন।')

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0 && validAwards
  }

  const getValue = (name) => (values[name] ? values[name] : '—')

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
  }
}
