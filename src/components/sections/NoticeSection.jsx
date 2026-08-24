import { NOTICE } from '../../data/content.js'

export default function NoticeSection() {
  return (
    <section className="pt-0 pb-10">
      <div className="w-[min(1160px,calc(100%-40px))] mx-auto bg-[#fff5df] border border-[#ead5a9] rounded-[12px] px-6 py-5 flex gap-4 items-start">
        <div className="bg-[#b67d2e] text-white w-[30px] h-[30px] rounded-full grid place-items-center font-extrabold flex-none">
          !
        </div>
        <div>
          <strong className="text-[15px] text-[#704820]">{NOTICE.title}</strong>
          <p className="mt-0.5 text-[13px] text-[#735e4d]">{NOTICE.text}</p>
        </div>
      </div>
    </section>
  )
}
