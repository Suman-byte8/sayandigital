import Modal from './Modal.jsx'
import Button from '../ui/Button.jsx'
import { useTranslation } from '../../i18n/I18nContext.jsx'

export default function SuccessModal({ open, onClose, applicationId, paymentId, onPrint }) {
  const { t } = useTranslation()
  const ui = t.ui.successModal

  return (
    <Modal open={open} onClose={onClose} showClose={false} cardClass="text-center max-w-[520px]">
      <div className="mx-auto mb-3 w-[65px] h-[65px] rounded-full bg-[#9d3644] text-white grid place-items-center text-[30px]">
        ✓
      </div>
      <div className="text-[10px] tracking-[2px] uppercase text-[#a06e31] font-extrabold">
        {ui.presented}
      </div>
      <h2 className="font-serif font-bold text-[30px] my-[5px]">{t.brand.event}</h2>
      <h3 className="font-serif font-bold text-[22px] my-2">{ui.title}</h3>
      <p className="text-[13px] text-[#776a64]">{ui.text}</p>

      {applicationId && (
        <div className="bg-[#fff0dc] border border-[#e5c68f] rounded-[9px] p-[13px] my-[22px]">
          <small className="block text-[#856c4f] text-[10px]">{ui.applicationIdLabel}</small>
          <strong className="font-mono font-bold text-[24px] tracking-[2px] text-[#752430]">
            {applicationId}
          </strong>
        </div>
      )}

      {paymentId && (
        <div className="bg-[#f4efe9] border border-[#e0d3c4] rounded-[9px] p-[13px] mb-[22px]">
          <small className="block text-[#856c4f] text-[10px]">{ui.paymentIdLabel}</small>
          <strong className="font-mono font-bold text-[15px] tracking-[1px] text-[#5c4a3a]">
            {paymentId}
          </strong>
        </div>
      )}

      <div className="flex justify-end gap-2.5 mt-5">
        <Button variant="ghost" onClick={onPrint}>
          {ui.printButton}
        </Button>
        <Button variant="primary" onClick={onClose}>
          {ui.closeButton}
        </Button>
      </div>
    </Modal>
  )
}
