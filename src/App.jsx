import { useEffect, useState } from 'react'
import './App.css'

const REQUIRED_FIELDS = [
  'clubName', 'venue', 'clubAddress', 'district', 'block', 'pin', 'pujaType',
  'applicant', 'role', 'mobile', 'email', 'startDate', 'endDate',
]

const AWARDS = [
  ['সেরা প্রতিমা', 'প্রতিমার শিল্প ও নির্মাণ'],
  ['সেরা মণ্ডপ', 'মণ্ডপের নকশা ও নির্মাণ'],
  ['সেরা থিম', 'ভাবনা ও উপস্থাপনা'],
  ['সেরা আলোকসজ্জা', 'আলো ও পরিবেশ'],
  ['সেরা পরিবেশবান্ধব পূজা', 'পরিবেশ সচেতন উদ্যোগ'],
  ['সেরা সামাজিক উদ্যোগ', 'সামাজিক দায়বদ্ধতা'],
  ['সেরা সার্বিক পূজা', 'সামগ্রিক মূল্যায়ন'],
  ['অন্যান্য', 'অন্যান্য বিভাগ'],
]

const STEPS = [
  ['০১', 'কমিটির তথ্য'],
  ['০২', 'আবেদনকারী'],
  ['০৩', 'পূজার তথ্য'],
  ['০৪', 'সম্মান বিভাগ'],
  ['০৫', 'নথি'],
  ['০৬', 'পর্যালোচনা'],
]

const FIELD_GROUPS = [
  {
    no: '০১',
    title: 'পূজা কমিটির তথ্য',
    desc: 'আপনার পূজা কমিটির মৌলিক তথ্য দিন।',
    fields: [
      { name: 'clubName', label: 'পূজা কমিটির নাম', req: true, ph: 'যেমন: উত্তরপাড়া সার্বজনীন দুর্গোৎসব কমিটি', full: true },
      { name: 'venue', label: 'পূজার স্থান / মণ্ডপের নাম', req: true, ph: 'মণ্ডপের নাম' },
      { name: 'established', label: 'প্রতিষ্ঠার বছর', type: 'number', min: '1800', max: '2026', ph: 'যেমন: ১৯৯৮' },
      { name: 'clubAddress', label: 'সম্পূর্ণ ঠিকানা', req: true, textarea: true, rows: 3, ph: 'বাড়ি / রাস্তা / এলাকা / পাড়া', full: true },
      { name: 'district', label: 'জেলা', req: true, ph: 'জেলার নাম' },
      { name: 'block', label: 'ব্লক / পুরসভা', req: true, ph: 'ব্লক / পুরসভার নাম' },
      { name: 'pin', label: 'পিন কোড', req: true, inputmode: 'numeric', ph: '৬ সংখ্যার পিন কোড' },
      { name: 'pujaType', label: 'পূজার ধরন', req: true, select: true, opts: ['বারোয়ারি', 'ক্লাব পরিচালিত', 'আবাসিক', 'অন্যান্য'] },
      { name: 'visitors', label: 'আনুমানিক দর্শনার্থী', type: 'number', min: '0', ph: 'প্রতিদিন আনুমানিক সংখ্যা' },
      { name: 'social', label: 'ওয়েবসাইট / Facebook Page', ph: 'https://...' },
      { name: 'clubIntro', label: 'পূজা কমিটির সংক্ষিপ্ত পরিচিতি', textarea: true, rows: 4, ph: 'কমিটির ইতিহাস ও কার্যক্রম সম্পর্কে সংক্ষেপে লিখুন', full: true },
    ],
  },
  {
    no: '০২',
    title: 'আবেদনকারীর তথ্য',
    desc: 'কমিটির পক্ষ থেকে যোগাযোগকারী ব্যক্তির তথ্য দিন।',
    fields: [
      { name: 'applicant', label: 'আবেদনকারীর নাম', req: true, ph: 'পূর্ণ নাম' },
      { name: 'role', label: 'পদ / দায়িত্ব', req: true, select: true, opts: ['সভাপতি', 'সম্পাদক', 'কোষাধ্যক্ষ', 'সদস্য', 'অন্যান্য'] },
      { name: 'mobile', label: 'মোবাইল নম্বর', req: true, inputmode: 'numeric', ph: '১০ সংখ্যার মোবাইল নম্বর' },
      { name: 'whatsapp', label: 'WhatsApp নম্বর', inputmode: 'numeric', ph: 'WhatsApp নম্বর' },
      { name: 'email', label: 'Email Address', req: true, type: 'email', ph: 'example@email.com' },
      { name: 'alternate', label: 'বিকল্প যোগাযোগ নম্বর', inputmode: 'numeric', ph: 'বিকল্প নম্বর' },
      { name: 'contactAddress', label: 'যোগাযোগের ঠিকানা', textarea: true, rows: 3, ph: 'বর্তমান যোগাযোগের ঠিকানা', full: true },
    ],
  },
  {
    no: '০৩',
    title: 'পূজা সম্পর্কিত তথ্য',
    desc: '২০২৬ সালের পূজা সম্পর্কে বিস্তারিত তথ্য দিন।',
    fields: [
      { name: 'startDate', label: 'পূজা শুরুর তারিখ', req: true, type: 'date' },
      { name: 'endDate', label: 'পূজা শেষের তারিখ', req: true, type: 'date' },
      { name: 'idolType', label: 'প্রতিমার ধরন', ph: 'যেমন: সাবেকি / থিম' },
      { name: 'theme', label: 'এবারের পূজার থিম', ph: 'থিমের নাম', full: true },
      { name: 'themeDetails', label: 'থিমের সংক্ষিপ্ত বিবরণ', textarea: true, rows: 4, ph: 'থিমের ভাবনা ও বাস্তবায়ন সম্পর্কে লিখুন', full: true },
      { name: 'special', label: 'পূজার বিশেষ আকর্ষণ', textarea: true, rows: 3, ph: 'বিশেষ আয়োজন, সাংস্কৃতিক অনুষ্ঠান ইত্যাদি', full: true },
      { name: 'eco', label: 'পরিবেশবান্ধব উদ্যোগ', textarea: true, rows: 3, ph: 'যদি থাকে', full: true },
      { name: 'socialWork', label: 'সামাজিক উদ্যোগ', textarea: true, rows: 3, ph: 'সমাজসেবামূলক কার্যক্রম', full: true },
      { name: 'security', label: 'নিরাপত্তা ব্যবস্থা', textarea: true, rows: 3, ph: 'নিরাপত্তা ব্যবস্থা সম্পর্কে লিখুন', full: true },
      { name: 'visitorCare', label: 'দর্শনার্থীদের জন্য বিশেষ ব্যবস্থা', textarea: true, rows: 3, ph: 'যদি থাকে', full: true },
    ],
  },
]

const escapeHtml = (str) =>
  String(str ?? '').replace(/[&<>"']/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;',
  }[m]))

function Field({ config, value, invalid, onChange }) {
  const { name, label, req, ph, textarea, rows, type = 'text', inputmode, select, opts, min, max } = config
  let control
  if (select) {
    control = (
      <select name={name} value={value || ''} onChange={(e) => onChange(name, e.target.value)}>
        <option value="">নির্বাচন করুন</option>
        {opts.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    )
  } else if (textarea) {
    control = (
      <textarea name={name} value={value || ''} rows={rows} placeholder={ph} onChange={(e) => onChange(name, e.target.value)} />
    )
  } else {
    control = (
      <input name={name} type={type} value={value || ''} min={min} max={max} inputMode={inputmode} placeholder={ph} onChange={(e) => onChange(name, e.target.value)} />
    )
  }
  const cls = ['field', config.full ? 'full' : '', invalid ? 'invalid' : ''].filter(Boolean).join(' ')
  return (
    <label className={cls} id={'field-' + name}>
      <span>{label}{req && <i>*</i>}</span>
      {control}
    </label>
  )
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [form, setForm] = useState({})
  const [awards, setAwards] = useState([])
  const [declared, setDeclared] = useState(false)
  const [invalid, setInvalid] = useState({})
  const [awardsError, setAwardsError] = useState('')
  const [docStatus, setDocStatus] = useState({})
  const [photos, setPhotos] = useState([])
  const [reviewOpen, setReviewOpen] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)
  const [applicationId, setApplicationId] = useState('SS2026-000000')
  const [reviewRows, setReviewRows] = useState([])

  const setField = (name, value) => setForm((f) => ({ ...f, [name]: value }))
  const getValue = (name) => ((form[name] || '').toString().trim() || '—')

  const done = REQUIRED_FIELDS.filter((n) => (form[n] || '').trim()).length
  const progress = Math.min(100, (done / REQUIRED_FIELDS.length) * 100)
  const stepIndex = Math.min(6, Math.max(1, Math.ceil((done / REQUIRED_FIELDS.length) * 6)))

  useEffect(() => {
    document.body.style.overflow = reviewOpen || successOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [reviewOpen, successOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setReviewOpen(false)
        setSuccessOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    return () => photos.forEach((p) => p.url && URL.revokeObjectURL(p.url))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleMenu = () => setNavOpen((o) => !o)
  const closeMenu = () => setNavOpen(false)

  const toggleAward = (value) =>
    setAwards((a) => (a.includes(value) ? a.filter((x) => x !== value) : [...a, value]))

  const handleDoc = (key, e) => {
    const file = e.target.files && e.target.files[0]
    e.target.value = null
    if (!file) return
    if (file.size > 5 * 1024 * 1024) {
      setDocStatus((s) => ({ ...s, [key]: { name: 'ফাইলের আকার 5 MB-এর বেশি।', error: true } }))
      return
    }
    setDocStatus((s) => ({ ...s, [key]: { name: file.name, error: false } }))
  }

  const handlePhotos = (e) => {
    const files = Array.from(e.target.files || [])
    e.target.value = null
    const available = 8 - photos.length
    const next = []
    files.slice(0, available).forEach((file) => {
      if (file.size <= 5 * 1024 * 1024) next.push({ name: file.name, url: URL.createObjectURL(file) })
    })
    if (next.length) setPhotos((p) => [...p, ...next])
  }

  const removePhoto = (index) => {
    const item = photos[index]
    if (item) URL.revokeObjectURL(item.url)
    setPhotos((arr) => arr.filter((_, i) => i !== index))
  }

  const validateForm = () => {
    const bad = {}
    REQUIRED_FIELDS.forEach((n) => {
      if (!(form[n] || '').trim()) bad[n] = true
    })
    const mobile = (form.mobile || '').replace(/\s+/g, '')
    if (mobile && !/^[6-9]\d{9}$/.test(mobile)) bad.mobile = true
    const pin = (form.pin || '').trim()
    if (pin && !/^\d{6}$/.test(pin)) bad.pin = true
    setInvalid(bad)
    setAwardsError(awards.length ? '' : 'কমপক্ষে একটি সম্মান বিভাগ নির্বাচন করুন।')
    if (Object.keys(bad).length || awards.length === 0) {
      const first = REQUIRED_FIELDS.find((n) => bad[n])
      if (first) {
        setTimeout(() => {
          document.getElementById('field-' + first)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 50)
      }
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setReviewRows([
      ['পূজা কমিটি', getValue('clubName')],
      ['মণ্ডপ', getValue('venue')],
      ['জেলা', getValue('district')],
      ['আবেদনকারী', getValue('applicant')],
      ['পদ', getValue('role')],
      ['মোবাইল', getValue('mobile')],
      ['ইমেল', getValue('email')],
      ['পূজার থিম', getValue('theme')],
      ['সম্মান বিভাগ', awards.join(', ')],
    ])
    setReviewOpen(true)
  }

  const handleFinalSubmit = () => {
    setApplicationId('SS2026-' + Math.floor(100000 + Math.random() * 900000))
    setReviewOpen(false)
    setSuccessOpen(true)
  }

  const handlePrint = () => {
    const club = escapeHtml(getValue('clubName'))
    const applicant = escapeHtml(getValue('applicant'))
    const mobile = escapeHtml(getValue('mobile'))
    const win = window.open('', '_blank', 'width=800,height=700')
    win.document.write(`<!doctype html><html lang="bn"><head><meta charset="UTF-8"><title>শারদ সম্মান ২০২৬ — ${applicationId}</title><style>
  body{font-family:Arial,sans-serif;padding:50px;color:#302527} .sheet{max-width:680px;margin:auto;border:1px solid #ddd;padding:40px}
  h1{text-align:center;color:#742936} .muted{text-align:center;color:#8b6f66}.id{margin:30px 0;padding:18px;text-align:center;background:#fff2dc;border:1px solid #e4c789}
  .row{padding:12px 0;border-bottom:1px solid #eee}.row b{display:inline-block;width:180px}
  @media print{body{padding:0}.sheet{border:0}}
  </style></head><body><div class="sheet"><p class="muted">Sayan Digital presents</p><h1>শারদ সম্মান ২০২৬</h1><p class="muted">অনলাইন আবেদন গ্রহণের স্বীকৃতি</p><div class="id"><small>আবেদন নম্বর</small><h2>${applicationId}</h2></div><div class="row"><b>পূজা কমিটি</b>${club}</div><div class="row"><b>আবেদনকারী</b>${applicant}</div><div class="row"><b>মোবাইল</b>${mobile}</div><p style="margin-top:40px;color:#777">এই নথিটি অনলাইন আবেদন জমা দেওয়ার প্রাথমিক স্বীকৃতি হিসেবে তৈরি হয়েছে।</p></div><script>window.print()</script></body></html>`)
    win.document.close()
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-mark">SD</span>
            <span><strong>Sayan Digital</strong><small>শারদ সম্মান ২০২৬</small></span>
          </a>
          <button className="menu-btn" aria-label="মেনু খুলুন" aria-expanded={navOpen} onClick={toggleMenu}>☰</button>
          <nav id="mainNav" className={navOpen ? 'open' : ''}>
            <a href="#home" onClick={closeMenu}>হোম</a>
            <a href="#process" onClick={closeMenu}>আবেদন প্রক্রিয়া</a>
            <a href="#documents" onClick={closeMenu}>প্রয়োজনীয় নথি</a>
            <a href="#application" onClick={closeMenu}>আবেদন করুন</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-pattern"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="presented"><span></span>Sayan Digital presents<span></span></div>
              <p className="eyebrow">দুর্গাপূজা সম্মাননা ২০২৬</p>
              <h1>শারদ <em>সম্মান</em><br />২০২৬</h1>
              <p className="hero-subtitle">দুর্গাপূজা সম্মাননা ২০২৬-এর জন্য অনলাইন আবেদন</p>
              <p className="hero-text">এবার শারদ সম্মানের আবেদন হোক আরও সহজ, দ্রুত ও ডিজিটাল। আপনার পূজা কমিটির তথ্য, পূজার বিবরণ ও প্রয়োজনীয় নথি জমা দিয়ে অংশগ্রহণ করুন।</p>
              <div className="hero-actions">
                <a href="#application" className="btn btn-primary">আবেদন শুরু করুন <span>→</span></a>
                <a href="#process" className="btn btn-ghost">আবেদনের প্রক্রিয়া দেখুন</a>
              </div>
              <div className="trust-row">
                <span>✓ অনলাইন আবেদন</span><span>✓ সহজ প্রক্রিয়া</span><span>✓ তথ্য যাচাই</span>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="halo"></div>
              <div className="sun"></div>
              <div className="lotus">✦</div>
              <div className="art-ring ring-one"></div>
              <div className="art-ring ring-two"></div>
              <div className="alpana alpana-one">◌</div>
              <div className="alpana alpana-two">✧</div>
              <div className="vertical-line"></div>
              <div className="art-copy">শারদ<br /><b>২০২৬</b></div>
            </div>
          </div>
        </section>

        <section className="intro-strip">
          <div className="container stats">
            <div><strong>০১</strong><span>তথ্য পূরণ</span></div>
            <div><strong>০২</strong><span>নথি সংযুক্ত</span></div>
            <div><strong>০৩</strong><span>তথ্য যাচাই</span></div>
            <div><strong>০৪</strong><span>আবেদন জমা</span></div>
          </div>
        </section>

        <section className="section process" id="process">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">সহজ চার ধাপ</span>
              <h2>আবেদনের প্রক্রিয়া</h2>
              <p>কয়েকটি সহজ ধাপে আপনার পূজা কমিটির আবেদন সম্পূর্ণ করুন।</p>
            </div>
            <div className="process-grid">
              <article className="process-card"><span>০১</span><div className="icon">✎</div><h3>তথ্য পূরণ করুন</h3><p>পূজা কমিটি ও আবেদনকারীর প্রয়োজনীয় তথ্য দিন।</p></article>
              <article className="process-card"><span>০২</span><div className="icon">↥</div><h3>নথি সংযুক্ত করুন</h3><p>প্রয়োজনীয় নথি ও পূজার ছবি আপলোড করুন।</p></article>
              <article className="process-card"><span>০৩</span><div className="icon">✓</div><h3>তথ্য যাচাই করুন</h3><p>জমা দেওয়ার আগে সম্পূর্ণ আবেদনটি একবার দেখে নিন।</p></article>
              <article className="process-card"><span>০৪</span><div className="icon">→</div><h3>আবেদন জমা দিন</h3><p>আবেদন নম্বরটি সংরক্ষণ করে রাখুন।</p></article>
            </div>
          </div>
        </section>

        <section className="notice-section">
          <div className="container notice">
            <div className="notice-icon">!</div>
            <div><strong>আবেদনের আগে জেনে নিন</strong><p>সমস্ত তথ্য সঠিকভাবে পূরণ করুন। প্রয়োজনীয় নথি নির্ধারিত ফরম্যাটে আপলোড করুন এবং আবেদন নম্বরটি ভবিষ্যতের জন্য সংরক্ষণ করুন।</p></div>
          </div>
        </section>
<section className="section application-section" id="application">
          <div className="container">
            <div className="section-heading left">
              <span className="section-kicker">অনলাইন আবেদন</span>
              <h2>শারদ সম্মান ২০২৬ — আবেদনপত্র</h2>
              <p>আয়োজক ক্লাব / পূজা কমিটির পক্ষ থেকে আবেদনটি সঠিক তথ্য ও প্রয়োজনীয় নথি সহ পূরণ করুন।</p>
            </div>

            <div className="form-shell">
              <div className="progress-bar">
                <div className="progress-fill" id="progressFill" style={{ width: `${progress}%` }}></div>
                {STEPS.map(([no, label], i) => (
                  <div
                    className={'step' + (i + 1 === stepIndex ? ' active' : '') + (i + 1 < stepIndex ? ' done' : '')}
                    data-step={i + 1}
                    key={no}
                  >
                    <b>{no}</b>
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <form id="applicationForm" noValidate onSubmit={handleSubmit}>
                {FIELD_GROUPS.map((group) => (
                  <div className="form-section" data-section={group.no} key={group.no}>
                    <div className="form-section-head">
                      <span>{group.no}</span>
                      <div><h3>{group.title}</h3><p>{group.desc}</p></div>
                    </div>
                    <div className="form-grid">
                      {group.no === '০৩' && (
                        <label className="field"><span>পূজার বছর</span><input value="২০২৬" disabled /></label>
                      )}
                      {group.fields.map((cfg) => (
                        <Field
                          key={cfg.name}
                          config={cfg}
                          value={form[cfg.name]}
                          invalid={invalid[cfg.name]}
                          onChange={setField}
                        />
                      ))}
                    </div>
                  </div>
                ))}
<div className="form-section" data-section="৪">
                  <div className="form-section-head">
                    <span>০৪</span>
                    <div><h3>শারদ সম্মান বিভাগ</h3><p>আপনি যে বিভাগগুলিতে অংশগ্রহণ করতে চান সেগুলি নির্বাচন করুন।</p></div>
                  </div>
                  <div className="award-grid">
                    {AWARDS.map(([name, desc]) => (
                      <label className="award" key={name}>
                        <input type="checkbox" name="awards" value={name} checked={awards.includes(name)} onChange={() => toggleAward(name)} />
                        <span className="award-check">✓</span>
                        <b>{name}</b>
                        <small>{desc}</small>
                      </label>
                    ))}
                  </div>
                  <p className="field-error awards-error" style={awardsError ? undefined : { display: 'none' }}>{awardsError}</p>
                </div>

                <div className="form-section" data-section="৫" id="documents">
                  <div className="form-section-head">
                    <span>০৫</span>
                    <div><h3>প্রয়োজনীয় নথি ও ছবি</h3><p>নির্ধারিত ফরম্যাটে প্রয়োজনীয় ফাইল সংযুক্ত করুন।</p></div>
                  </div>
                  <div className="upload-list">
                    {[
                      ['committee', 'পূজা কমিটির অনুমোদন / পরিচয়পত্র'],
                      ['applicantDoc', 'আবেদনকারীর পরিচয়পত্র'],
                      ['addressDoc', 'পূজা কমিটির ঠিকানার প্রমাণ'],
                    ].map(([key, label]) => (
                      <div className="upload-row" key={key}>
                        <div><b>{label}</b><small>PDF, JPG, PNG • সর্বোচ্চ 5 MB</small></div>
                        <label className="upload-btn">ফাইল নির্বাচন
                          <input type="file" data-required-doc accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleDoc(key, e)} />
                        </label>
                        <span className="file-status" style={docStatus[key]?.error ? { color: '#b13b46' } : docStatus[key] ? { color: '#397348' } : undefined}>
                          {docStatus[key] ? docStatus[key].name : 'কোনও ফাইল নির্বাচিত নয়'}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="photo-upload">
                    <div className="photo-head">
                      <div><h4>পূজার ছবি</h4><p>মণ্ডপ, প্রতিমা, আলোকসজ্জা ও থিমের ছবি আপলোড করুন। সর্বোচ্চ ৮টি ছবি।</p></div>
                      <label className="upload-btn">ছবি নির্বাচন
                        <input id="photoInput" type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={handlePhotos} />
                      </label>
                    </div>
                    <div className="preview-grid" id="previewGrid">
                      {photos.map((p, i) => (
                        <div className="preview" key={p.url || i}>
                          <img src={p.url} alt="আপলোড করা পূজার ছবি" />
                          <button type="button" className="remove-photo" aria-label="ছবি মুছুন" onClick={() => removePhoto(i)}>×</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="form-section declaration">
                  <div className="declaration-box">
                    <div className="declaration-icon">✓</div>
                    <div>
                      <h3>ঘোষণা</h3>
                      <p>আমি ঘোষণা করছি যে, এই আবেদনপত্রে প্রদত্ত সমস্ত তথ্য আমার জ্ঞান ও বিশ্বাস অনুযায়ী সঠিক। প্রয়োজনীয় নথি ও তথ্য যাচাইয়ের জন্য আয়োজক কর্তৃপক্ষের অনুমতি রয়েছে।</p>
                      <label className="agree">
                        <input id="declaration" type="checkbox" checked={declared} onChange={(e) => setDeclared(e.target.checked)} />
                        <span>আমি উপরের ঘোষণা ও শর্তাবলীতে সম্মত।</span>
                      </label>
                    </div>
                  </div>
                  <button type="submit" id="submitBtn" className="btn btn-primary submit-btn" disabled={!declared}>আবেদন পর্যালোচনা করুন <span>→</span></button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
<div className={'modal' + (reviewOpen ? ' open' : '')} id="reviewModal" aria-hidden={!reviewOpen} onClick={(e) => e.target === e.currentTarget && setReviewOpen(false)}>
        <div className="modal-card review-card">
          <button className="modal-close" data-close onClick={() => setReviewOpen(false)}>×</button>
          <div className="modal-kicker">Sayan Digital presents</div>
          <h2>আবেদনটি যাচাই করুন</h2>
          <p>জমা দেওয়ার আগে প্রদত্ত তথ্যগুলি একবার যাচাই করে নিন।</p>
          <div id="reviewContent" className="review-content">
            {reviewRows.map(([a, b]) => (
              <div className="review-row" key={a}><b>{a}</b><span>{b}</span></div>
            ))}
          </div>
          <div className="modal-actions">
            <button className="btn btn-ghost" data-close onClick={() => setReviewOpen(false)}>তথ্য পরিবর্তন করুন</button>
            <button id="finalSubmit" className="btn btn-primary" onClick={handleFinalSubmit}>আবেদন জমা দিন</button>
          </div>
        </div>
      </div>

      <div className={'modal' + (successOpen ? ' open' : '')} id="successModal" aria-hidden={!successOpen} onClick={(e) => e.target === e.currentTarget && setSuccessOpen(false)}>
        <div className="modal-card success-card">
          <div className="success-seal">✓</div>
          <div className="modal-kicker">Sayan Digital presents</div>
          <h2>শারদ সম্মান ২০২৬</h2>
          <h3>আবেদন সফলভাবে জমা হয়েছে</h3>
          <p>আপনার আবেদনটি সফলভাবে গ্রহণ করা হয়েছে। এই আবেদন নম্বরটি সংরক্ষণ করুন।</p>
          <div className="application-id">
            <small>আপনার আবেদন নম্বর</small>
            <strong id="applicationId">{applicationId}</strong>
          </div>
          <div className="modal-actions">
            <button className="btn btn-ghost" id="printBtn" onClick={handlePrint}>প্রিন্ট করুন</button>
            <button className="btn btn-primary" data-close onClick={() => setSuccessOpen(false)}>বন্ধ করুন</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">Sayan Digital</div>
            <h2>শারদ সম্মান ২০২৬</h2>
            <p>ডিজিটাল আবেদন ও তথ্য ব্যবস্থাপনা</p>
          </div>
          <div>
            <b>যোগাযোগ</b>
            <p>মোবাইল: +91 XXXXX XXXXX<br />ইমেল: example@sayandigital.com<br />ঠিকানা: Sayan Digital-এর ঠিকানা</p>
          </div>
          <div>
            <b>গুরুত্বপূর্ণ</b>
            <p>
              <a href="#process">আবেদন প্রক্রিয়া</a><br />
              <a href="#documents">প্রয়োজনীয় নথি</a><br />
              <a href="#application">অনলাইন আবেদন</a>
            </p>
          </div>
        </div>
        <div className="copyright">© ২০২৬ Sayan Digital. All Rights Reserved.</div>
      </footer>
    </>
  )
}