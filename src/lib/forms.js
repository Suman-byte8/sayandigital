// ============================================================
//  submitForm(formType, data, files)
//    → Promise<{ ok, id?, folder?, error? }>  (never throws)
//
//  Sends ONE JSON payload per submission to the Google Apps
//  Script Web App configured via VITE_FORMS_ENDPOINT, using
//  VITE_FORMS_TOKEN as the shared secret inside the body.
//
//  IMPORTANT: the request Content-Type MUST stay text/plain.
//  Apps Script cannot answer a CORS preflight, and any "real"
//  content type such as application/json triggers one — the
//  browser would cancel the request before the script ever
//  runs. Do not "fix" this header; the script reads
//  e.postData.contents and parses it as JSON itself.
//
//  This module has no access to the React translation context (it's a
//  plain utility, not a component), so the handful of boundary-error
//  fallbacks below (bad config, oversized file, network failure) carry
//  their own tiny bilingual dictionary instead of pulling in the whole
//  i18n bundle. Callers pass the current `lang` ('en' | 'bn').
// ============================================================

const MAX_FILE_BYTES = 10 * 1024 * 1024 // 10 MB, enforced BEFORE encoding

const MESSAGES = {
  en: {
    endpointMissing:
      'The server address has not been configured yet. Please set VITE_FORMS_ENDPOINT in the .env file and try again.',
    filesTooBig: (names) =>
      `"${names.join('", "')}" exceed(s) 10 MB. Please attach smaller files and try again.`,
    submitFailed: 'Could not submit the application to the server. Please try again shortly.',
    network: 'The application could not be submitted due to a network issue. Please check your internet connection and try again.',
    orderNetwork: 'Could not start the payment due to a network issue. Please check your internet connection and try again.',
    fileReadFailed: (name) => `Could not read the file "${name}".`,
  },
  bn: {
    endpointMissing:
      'সার্ভারের ঠিকানা এখনও কনফিগার করা হয়নি। অনুগ্রহ করে .env ফাইলে VITE_FORMS_ENDPOINT বসিয়ে আবার চেষ্টা করুন।',
    filesTooBig: (names) =>
      `"${names.join('", "')}" ফাইলের আকার 10 MB-এর বেশি। ছোট ফাইল সংযুক্ত করে আবার চেষ্টা করুন।`,
    submitFailed: 'সার্ভারে আবেদন পাঠানো সম্ভব হয়নি। অনুগ্রহ করে কিছুক্ষণ পরে আবার চেষ্টা করুন।',
    network: 'নেটওয়ার্ক সমস্যার কারণে আবেদনটি জমা হয়নি। ইন্টারনেট সংযোগ দেখে অনুগ্রহ করে আবার চেষ্টা করুন।',
    orderNetwork: 'নেটওয়ার্ক সমস্যার কারণে পেমেন্ট শুরু করা যায়নি। ইন্টারনেট সংযোগ দেখে অনুগ্রহ করে আবার চেষ্টা করুন।',
    fileReadFailed: (name) => `"${name}" ফাইলটি পড়া যায়নি।`,
  },
}

// Resolve a File to raw base64 via FileReader.readAsDataURL,
// stripping the "data:*;base64," prefix.
function fileToBase64(file, lang) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = String(reader.result || '')
      const commaIndex = result.indexOf(',')
      resolve(commaIndex === -1 ? result : result.slice(commaIndex + 1))
    }
    reader.onerror = () => reject(new Error(MESSAGES[lang].fileReadFailed(file.name)))
    reader.readAsDataURL(file)
  })
}

// Accepts { fieldName: File | File[] | FileList } and flattens it into
// [{ field, file }]. Any file over MAX_FILE_BYTES is rejected up front
// (before base64 encoding) and its name collected for the error message.
function flattenFiles(files) {
  const entries = []
  const tooBig = []

  Object.entries(files || {}).forEach(([field, value]) => {
    // A single File is not iterable, so normalise it explicitly;
    // FileList and arrays both go through Array.from.
    const list = value instanceof File ? [value] : Array.from(value || [])
    list.forEach((file) => {
      if (!(file instanceof File)) return
      if (file.size > MAX_FILE_BYTES) {
        tooBig.push(file.name)
        return
      }
      entries.push({ field, file })
    })
  })

  return { entries, tooBig }
}

function resolveLang(lang) {
  return lang === 'bn' ? 'bn' : 'en'
}

// Asks the backend to create a Razorpay order for the application fee.
// The Key Secret never leaves Code.gs — this only returns the order_id
// and the public Key ID needed to open Razorpay Checkout.
export async function createPaymentOrder(lang) {
  const L = MESSAGES[resolveLang(lang)]
  try {
    const endpoint = import.meta.env.VITE_FORMS_ENDPOINT
    const token = import.meta.env.VITE_FORMS_TOKEN

    if (!endpoint || !/^https?:\/\//.test(endpoint) || endpoint === 'PASTE_YOUR_EXEC_URL_HERE') {
      return { ok: false, error: L.endpointMissing }
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      redirect: 'follow',
      body: JSON.stringify({ action: 'createOrder', token }),
    })

    let payload = null
    try {
      payload = await response.json()
    } catch {
      payload = null
    }

    if (!response.ok || !payload || payload.ok === false) {
      return { ok: false, error: (payload && payload.error) || L.orderNetwork }
    }

    return {
      ok: true,
      orderId: payload.orderId,
      amount: payload.amount,
      currency: payload.currency,
      keyId: payload.keyId,
    }
  } catch {
    return { ok: false, error: L.orderNetwork }
  }
}

export async function submitForm(formType, data, files, lang) {
  const L = MESSAGES[resolveLang(lang)]
  try {
    const endpoint = import.meta.env.VITE_FORMS_ENDPOINT
    const token = import.meta.env.VITE_FORMS_TOKEN

    if (!endpoint || !/^https?:\/\//.test(endpoint) || endpoint === 'PASTE_YOUR_EXEC_URL_HERE') {
      return { ok: false, error: L.endpointMissing }
    }

    const { entries, tooBig } = flattenFiles(files)
    if (tooBig.length > 0) {
      return { ok: false, error: L.filesTooBig(tooBig) }
    }

    // Encode only AFTER the size check so oversized files never reach FileReader.
    const encoded = []
    for (const { field, file } of entries) {
      encoded.push({
        field,
        name: file.name,
        mimeType: file.type || 'application/octet-stream',
        data: await fileToBase64(file, resolveLang(lang)),
      })
    }

    // Content-Type must remain text/plain;charset=utf-8 — see the comment
    // at the top of this file before changing anything here.
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      redirect: 'follow',
      body: JSON.stringify({ formType, token, data, files: encoded }),
    })

    let payload = null
    try {
      payload = await response.json()
    } catch {
      payload = null // non-JSON reply from the endpoint
    }

    if (!response.ok || (payload && payload.ok === false)) {
      return { ok: false, error: (payload && payload.error) || L.submitFailed }
    }

    return {
      ok: true,
      id: (payload && payload.id) || '',
      folder: (payload && payload.folder) || '',
    }
  } catch {
    // Network failure / aborted reader etc. — never throw to the caller.
    return { ok: false, error: L.network }
  }
}

// Fire-and-forget: tells the backend a Razorpay payment attempt failed so
// it can independently verify the failure via Razorpay's API and email
// the applicant. Never throws — a failure here must not affect the UI
// (the FailureModal is already driven by local state, not this call).
export async function reportPaymentFailure(data) {
  try {
    const endpoint = import.meta.env.VITE_FORMS_ENDPOINT
    const token = import.meta.env.VITE_FORMS_TOKEN
    if (!endpoint || !/^https?:\/\//.test(endpoint)) return { ok: false }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      redirect: 'follow',
      body: JSON.stringify({ action: 'recordPaymentFailure', token, data }),
    })

    return { ok: response.ok }
  } catch {
    return { ok: false }
  }
}
