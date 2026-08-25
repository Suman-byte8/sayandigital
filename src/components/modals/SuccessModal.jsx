import Modal from './Modal.jsx'
import Button from '../ui/Button.jsx'

export default function SuccessModal({ open, onClose, applicationId, onPrint }) {
  return (
    <Modal open={open} onClose={onClose} showClose={false} cardClass="text-center max-w-[520px]">
      <div className="mx-auto mb-3 w-[65px] h-[65px] rounded-full bg-[#9d3644] text-white grid place-items-center text-[30px]">
        ✓
      </div>
      <div className="text-[10px] tracking-[2px] uppercase text-[#a06e31] font-extrabold">
        Sayan Digital presents
      </div>
      <h2 className="font-serif font-bold text-[30px] my-[5px]">শারদ সম্মান ২০২৬</h2>
      <h3 className="font-serif font-bold text-[22px] my-2">আবেদন সফলভাবে জমা হয়েছে</h3>
      <p className="text-[13px] text-[#776a64]">
        আপনার আবেদনটি সফলভাবে গ্রহণ করা হয়েছে। এই আবেদন নম্বরটি সংরক্ষণ করুন।
      </p>

      {applicationId && (
        <div className="bg-[#fff0dc] border border-[#e5c68f] rounded-[9px] p-[13px] my-[22px]">
          <small className="block text-[#856c4f] text-[10px]">আপনার আবেদন নম্বর</small>
          <strong className="font-mono font-bold text-[24px] tracking-[2px] text-[#752430]">
            {applicationId}
          </strong>
        </div>
      )}

      <div className="flex justify-end gap-2.5 mt-5">
        <Button variant="ghost" onClick={onPrint}>
          প্রিন্ট করুন
        </Button>
        <Button variant="primary" onClick={onClose}>
          বন্ধ করুন
        </Button>
      </div>
    </Modal>
  )
}
