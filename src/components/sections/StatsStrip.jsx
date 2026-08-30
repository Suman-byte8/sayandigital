import { useTranslation } from '../../i18n/I18nContext.jsx'

export default function StatsStrip() {
  const { t } = useTranslation()
  const STATS = t.stats
  return (
    <section className="bg-white border-b border-[#eee1d4]">
      <div className="w-[min(1160px,calc(100%-40px))] mx-auto grid grid-cols-4 py-[25px] max-[850px]:grid-cols-2 max-[850px]:gap-2.5 max-[560px]:grid-cols-2">
        {STATS.map((stat, i) => (
          <div
            key={stat.num}
            className={`flex items-center justify-center gap-3.5 border-r border-[#eadfd3] last:border-0 ${
              i === 1 ? 'max-[850px]:border-0' : ''
            } max-[560px]:border-r max-[560px]:border-[#eadfd3] ${
              i % 2 === 1 ? 'max-[560px]:!border-r-0' : ''
            }`}
          >
            <strong className="font-serif font-bold text-[28px] text-[#9b3642]">{stat.num}</strong>
            <span className="text-[13px] text-[#655955]">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
