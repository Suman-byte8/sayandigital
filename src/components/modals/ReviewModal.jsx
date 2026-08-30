import Modal from './Modal.jsx'
import Button from '../ui/Button.jsx'
import Spinner from '../ui/Spinner.jsx'
import { useTranslation } from '../../i18n/I18nContext.jsx'

export default function ReviewModal({
  open,
  onClose,
  onConfirm,
  getValue,
  awards,
  submitting = false,
}) {
  const { t } = useTranslation()
  const ui = t.ui.reviewModal
  const fee = t.applicationFee

  const rows = t.reviewLabels.map(([name, label]) => [label, getValue(name)])
  rows.push([ui.awardsRowLabel, awards.length ? awards.join(', ') : '—'])

  return (
    <Modal open={open} onClose={onClose}>
      <div className="text-[10px] tracking-[2px] uppercase text-[#a06e31] font-extrabold">
        {ui.presented}
      </div>
      <h2 className="font-serif font-bold text-[30px] my-[5px]">{ui.title}</h2>
      <p className="text-[13px] text-[#776a64]">{ui.sub}</p>

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

      <p className="text-xs text-[#776a64] mt-4">{ui.feeNote(fee.amount, fee.label)}</p>

      {submitting && (
        <p role="status" className="text-xs text-[#776a64] mt-4 text-right">
          {ui.processingStatus}
        </p>
      )}

      <div className="flex justify-end gap-2.5 mt-5">
        <Button variant="ghost" onClick={onClose} disabled={submitting}>
          {ui.editButton}
        </Button>
        <Button variant="primary" onClick={onConfirm} disabled={submitting}>
          {submitting && <Spinner className="w-4 h-4" color="#fff" />}
          {submitting ? ui.preparing : ui.payButton(fee.amount)}
        </Button>
      </div>
    </Modal>
  )
}
