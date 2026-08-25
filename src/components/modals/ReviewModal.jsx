import Modal from './Modal.jsx'
import Button from '../ui/Button.jsx'
import { REVIEW_LABELS } from '../../data/content.js'

export default function ReviewModal({
  open,
  onClose,
  onConfirm,
  getValue,
  awards,
  submitting = false,
  error = '',
}) {
  const rows = REVIEW_LABELS.map(([name, label]) => [label, getValue(name)])
  rows.push(['সম্মান বিভাগ', awards.length ? awards.join(', ') : '—'])

  return (
    <Modal open={open} onClose={onClose}>
      <div className="text-[10px] tracking-[2px] uppercase text-[#a06e31] font-extrabold">
        Sayan Digital presents
      </div>
      <h2 className="font-serif font-bold text-[30px] my-[5px]">আবেদনটি যাচাই করুন</h2>
      <p className="text-[13px] text-[#776a64]">জমা দেওয়ার আগে প্রদত্ত তথ্যগুলি একবার যাচাই করে নিন।</p>

      <div className="my-5 border-t border-[#e7ddd5]">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between gap-5 py-2.5 border-b border-[#eee5de] text-xs max-[560px]:flex-col max-[560px]:gap-0.5"
          >
            <b className="text-[#5e504c]">{label}</b>
            <span className="text-right text-[#282321] max-[560px]:text-left">{value}</span>
          </div>
        ))}
      </div>

      {error && (
        <p role="alert" className="text-[#b13b46] text-xs mt-4 text-right">
          {error}
        </p>
      )}
      {submitting && (
        <p role="status" className="text-xs text-[#776a64] mt-4 text-right">
          আপনার আবেদন জমা হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন…
        </p>
      )}

      <div className="flex justify-end gap-2.5 mt-5">
        <Button variant="ghost" onClick={onClose} disabled={submitting}>
          তথ্য পরিবর্তন করুন
        </Button>
        <Button variant="primary" onClick={onConfirm} disabled={submitting}>
          {submitting ? 'পাঠানো হচ্ছে…' : 'আবেদন জমা দিন'}
        </Button>
      </div>
    </Modal>
  )
}
