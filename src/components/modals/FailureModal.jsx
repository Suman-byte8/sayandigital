import Modal from './Modal.jsx'
import Button from '../ui/Button.jsx'

// Shown whenever payment/submission fails. `onRetry` is only passed when
// no money has actually been charged yet — if it's absent (payment went
// through but saving the application failed) this deliberately shows no
// retry button, since retrying would risk charging the applicant twice.
export default function FailureModal({ open, onClose, message, paymentId, onRetry }) {
  return (
    <Modal open={open} onClose={onClose} showClose={false} cardClass="text-center max-w-[520px]">
      <div className="mx-auto mb-3 w-[65px] h-[65px] rounded-full bg-[#b13b46] text-white grid place-items-center text-[30px]">
        ✕
      </div>
      <div className="text-[10px] tracking-[2px] uppercase text-[#a06e31] font-extrabold">
        Sayan Digital presents
      </div>
      <h2 className="font-serif font-bold text-[30px] my-[5px]">শারদ সম্মান ২০২৬</h2>
      <h3 className="font-serif font-bold text-[22px] my-2 text-[#b13b46]">
        {onRetry ? 'পেমেন্ট সম্পন্ন হয়নি' : 'আবেদন জমা হয়নি'}
      </h3>
      <p className="text-[13px] text-[#776a64]">{message}</p>

      {paymentId && (
        <div className="bg-[#fff0dc] border border-[#e5c68f] rounded-[9px] p-[13px] my-[22px]">
          <small className="block text-[#856c4f] text-[10px]">পেমেন্ট রেফারেন্স নম্বর (সাপোর্টের জন্য সংরক্ষণ করুন)</small>
          <strong className="font-mono font-bold text-[18px] tracking-[1px] text-[#752430]">
            {paymentId}
          </strong>
        </div>
      )}

      <div className="flex justify-center gap-2.5 mt-5">
        {onRetry ? (
          <>
            <Button variant="ghost" onClick={onClose}>
              বন্ধ করুন
            </Button>
            <Button variant="primary" onClick={onRetry}>
              আবার চেষ্টা করুন
            </Button>
          </>
        ) : (
          <Button variant="primary" onClick={onClose}>
            বন্ধ করুন
          </Button>
        )}
      </div>
    </Modal>
  )
}
