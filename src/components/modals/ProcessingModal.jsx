import Modal from './Modal.jsx'
import Spinner from '../ui/Spinner.jsx'

// Shown in the gap between "Razorpay's popup just closed after a successful
// payment" and "our backend finished saving the application" — without
// this the reviewer sees nothing but a blank moment while files upload to
// Drive and the row is appended to Sheets, which reads as the page being
// stuck rather than working.
export default function ProcessingModal({ open }) {
  return (
    <Modal open={open} onClose={() => {}} showClose={false} cardClass="text-center max-w-[420px]">
      <div className="mx-auto mb-4 w-[65px] h-[65px] rounded-full bg-[#9d3644] text-white grid place-items-center">
        <Spinner className="w-7 h-7" color="#fff" />
      </div>
      <div className="text-[10px] tracking-[2px] uppercase text-[#a06e31] font-extrabold">
        Sayan Digital presents
      </div>
      <h3 className="font-serif font-bold text-[22px] my-2">আবেদন প্রক্রিয়া চলছে</h3>
      <p className="text-[13px] text-[#776a64]">
        অনুগ্রহ করে এই পাতাটি বন্ধ বা রিলোড করবেন না — আপনার নথি ও তথ্য সংরক্ষণ করা হচ্ছে।
      </p>
    </Modal>
  )
}
