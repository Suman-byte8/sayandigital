import { useTranslation } from '../../i18n/I18nContext.jsx'
import ApplicationForm from '../form/ApplicationForm.jsx'

export default function ApplicationSection() {
  const { t } = useTranslation()
  const APPLICATION_INTRO = t.applicationIntro
  return (
    <section id="application" className="pt-[45px] pb-[95px] max-[560px]:pb-[65px]">
      <div className="w-[min(1160px,calc(100%-40px))] mx-auto">
        {/* Left-aligned heading */}
        <div className="max-w-[650px] mb-[50px]">
          <span className="text-[11px] tracking-[2px] text-[#a36e29] uppercase font-extrabold">
            {APPLICATION_INTRO.kicker}
          </span>
          <h2 className="font-serif font-bold text-[clamp(30px,4vw,45px)] leading-[1.2] my-2 text-[#43232a]">
            {APPLICATION_INTRO.heading}
          </h2>
          <p className="text-[#766965] my-2.5">{APPLICATION_INTRO.sub}</p>
        </div>

        <ApplicationForm />
      </div>
    </section>
  )
}
