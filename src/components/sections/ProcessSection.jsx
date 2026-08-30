import { useTranslation } from '../../i18n/I18nContext.jsx'

export default function ProcessSection() {
  const { t } = useTranslation()
  const PROCESS = t.process
  return (
    <section id="process" className="py-[95px] bg-[#fbf8f2] max-[560px]:py-[65px]">
      <div className="w-[min(1160px,calc(100%-40px))] mx-auto">
        {/* Heading */}
        <div className="text-center max-w-[650px] mx-auto mb-[50px]">
          <span className="text-[11px] tracking-[2px] text-[#a36e29] uppercase font-extrabold">
            {PROCESS.kicker}
          </span>
          <h2 className="font-serif font-bold text-[clamp(30px,4vw,45px)] leading-[1.2] my-2 text-[#43232a]">
            {PROCESS.heading}
          </h2>
          <p className="text-[#766965] my-2.5">{PROCESS.sub}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-[18px] max-[850px]:grid-cols-2 max-[560px]:grid-cols-1">
          {PROCESS.cards.map((card) => (
            <article
              key={card.num}
              className="bg-white border border-[#eadfd4] p-[27px] rounded-[14px] relative transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_#4b25100c]"
            >
              <span className="absolute right-[18px] top-4 text-[#c7b7ad] text-xs">{card.num}</span>
              <div className="w-[45px] h-[45px] rounded-full bg-[#f5ead7] text-[#8f303d] grid place-items-center text-xl">
                {card.icon}
              </div>
              <h3 className="text-[17px] mt-[18px] mb-1">{card.title}</h3>
              <p className="text-[13px] text-[#756965] m-0">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
