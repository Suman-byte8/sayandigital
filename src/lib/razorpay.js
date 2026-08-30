// ============================================================
//  Razorpay Checkout helpers (client-side only)
//
//  The Razorpay Key Secret NEVER lives in this frontend — order
//  creation and payment verification both happen in Code.gs.
//  This module only loads the Checkout script and opens the
//  payment popup with an order_id issued by our backend.
// ============================================================

const CHECKOUT_SRC = 'https://checkout.razorpay.com/v1/checkout.js'

let scriptPromise = null

// Loads the Razorpay Checkout script once and caches the promise.
export function loadRazorpayScript() {
  if (typeof window !== 'undefined' && window.Razorpay) return Promise.resolve(true)
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = CHECKOUT_SRC
    script.onload = () => resolve(true)
    script.onerror = () => {
      scriptPromise = null // allow a retry on the next attempt
      resolve(false)
    }
    document.body.appendChild(script)
  })

  return scriptPromise
}

// Opens the Razorpay Checkout popup for a previously created order.
export function openRazorpayCheckout({
  keyId,
  orderId,
  amount,
  currency,
  name,
  description,
  prefill,
  onSuccess,
  onDismiss,
  onFailure,
}) {
  const rzp = new window.Razorpay({
    key: keyId,
    order_id: orderId,
    amount,
    currency,
    name,
    description,
    prefill,
    theme: { color: '#a03a47' },
    handler: (response) => onSuccess(response),
    modal: { ondismiss: () => onDismiss?.() },
  })

  rzp.on('payment.failed', (response) => onFailure?.(response))
  rzp.open()
}
