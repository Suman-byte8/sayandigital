// ============================================================
//  Small pure helpers used across the app
// ============================================================

export function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }[m]));
}

export function generateApplicationId() {
  return 'SS2026-' + Math.floor(100000 + Math.random() * 900000);
}

export function formatDateBn(value) {
  if (!value) return '—';
  const d = new Date(value);
  return d.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const ACK_TEXT = {
  en: {
    htmlLang: 'en',
    title: 'Sharad Samman 2026',
    presented: 'Sayan Digital presents',
    subtitle: 'Online Application Acknowledgement',
    idLabel: 'Application Number',
    club: 'Puja Committee',
    applicant: 'Applicant',
    mobile: 'Mobile',
    footer: 'This document is a preliminary acknowledgement of your online application submission.',
  },
  bn: {
    htmlLang: 'bn',
    title: 'শারদ সম্মান ২০২৬',
    presented: 'Sayan Digital presents',
    subtitle: 'অনলাইন আবেদন গ্রহণের স্বীকৃতি',
    idLabel: 'আবেদন নম্বর',
    club: 'পূজা কমিটি',
    applicant: 'আবেদনকারী',
    mobile: 'মোবাইল',
    footer: 'এই নথিটি অনলাইন আবেদন জমা দেওয়ার প্রাথমিক স্বীকৃতি হিসেবে তৈরি হয়েছে।',
  },
};

// Opens a printable acknowledgement sheet in a new window
export function printAcknowledgement({ id, club, applicant, mobile, lang }) {
  const T = ACK_TEXT[lang === 'bn' ? 'bn' : 'en'];
  const win = window.open('', '_blank', 'width=800,height=700');
  if (!win) return;
  win.document.write(`<!doctype html><html lang="${T.htmlLang}"><head><meta charset="UTF-8"><title>${T.title} — ${id}</title><style>
    body{font-family:Arial,sans-serif;padding:50px;color:#302527}
    .sheet{max-width:680px;margin:auto;border:1px solid #ddd;padding:40px}
    h1{text-align:center;color:#742936}
    .muted{text-align:center;color:#8b6f66}
    .id{margin:30px 0;padding:18px;text-align:center;background:#fff2dc;border:1px solid #e4c789}
    .row{padding:12px 0;border-bottom:1px solid #eee}.row b{display:inline-block;width:180px}
    @media print{body{padding:0}.sheet{border:0}}
  </style></head><body><div class="sheet">
    <p class="muted">${T.presented}</p>
    <h1>${T.title}</h1>
    <p class="muted">${T.subtitle}</p>
    <div class="id"><small>${T.idLabel}</small><h2>${id}</h2></div>
    <div class="row"><b>${T.club}</b>${escapeHtml(club)}</div>
    <div class="row"><b>${T.applicant}</b>${escapeHtml(applicant)}</div>
    <div class="row"><b>${T.mobile}</b>${escapeHtml(mobile)}</div>
    <p style="margin-top:40px;color:#777">${T.footer}</p>
  </div><script>window.print()<\/script></body></html>`);
  win.document.close();
}
