import { useTranslation } from "../../i18n/I18nContext.jsx";
import Button from "../ui/Button.jsx";
import pcBg from "../../assets/pc_view_background.webp";
import mobileBg from "../../assets/mobile_view_background.png";
import {
  DEVELOPER_PORTFOLIO_URL,
  DEVELOPER_PORTFOLIO_LABEL,
  DEVELOPER_PHONE_DISPLAY,
  DEVELOPER_PHONE_TEL,
  SPONSOR_LOGOS,
} from "../../data/content.js";

const MARQUEE_REPEATS = 6;

const renderMarqueeUnit = (marqueeText, key) => (
  <div key={key} className="flex shrink-0 items-center px-2">
    {Array.from({ length: MARQUEE_REPEATS }).map((_, index) => (
      <span
        key={index}
        className="flex shrink-0 items-center gap-4 pr-4 max-[560px]:gap-3 max-[560px]:pr-3"
      >
        <span className="whitespace-nowrap font-serif text-[14px] font-bold tracking-[0.6px] text-[#6b2f36] max-[560px]:text-[12px]">
          {marqueeText}
        </span>

        <span className="text-[12px] text-[#c9a262]" aria-hidden="true">
          ✦
        </span>
      </span>
    ))}
  </div>
);

export default function Hero() {
  const { t } = useTranslation();
  const HERO = t.hero;

  return (
    <section
      id="home"
      className="relative min-h-[720px] overflow-hidden bg-[#210b10] text-[#fff3df]"
    >
      <style>{`
        @keyframes hero-marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .hero-marquee-track {
          width: max-content;
          animation: hero-marquee-scroll 30s linear infinite;
          will-change: transform;
        }
      `}</style>

      {/* Desktop background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat max-[850px]:hidden"
        style={{ backgroundImage: `url(${pcBg})` }}
        aria-hidden="true"
      />

      {/* Mobile background */}
      <div
        className="absolute inset-0 z-0 hidden bg-cover bg-center bg-no-repeat max-[850px]:block"
        style={{ backgroundImage: `url(${mobileBg})` }}
        aria-hidden="true"
      />

      {/* Readability overlays */}
      <div
        className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(31,8,13,0.97)_0%,rgba(42,15,20,0.88)_48%,rgba(42,15,20,0.48)_100%)] max-[850px]:bg-[linear-gradient(180deg,rgba(31,8,13,0.96)_0%,rgba(42,15,20,0.88)_60%,rgba(42,15,20,0.78)_100%)]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_75%_45%,rgba(220,176,94,0.16),transparent_36%)]"
        aria-hidden="true"
      />

      <div
        className="hero-dots absolute inset-0 z-[1] opacity-[0.07]"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-[2] mx-auto grid min-h-[720px] w-[min(1180px,calc(100%-40px))] grid-cols-[1.08fr_0.92fr] items-center gap-14 pb-[110px] pt-[70px] max-[1000px]:gap-8 max-[850px]:min-h-0 max-[850px]:grid-cols-1 max-[850px]:gap-10 max-[850px]:pb-[130px] max-[850px]:pt-[75px]">
        {/* Hero copy */}
        <div className="max-w-[680px]">
          <div className="mb-5 flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[2.4px] text-[#e8c77f] max-[560px]:text-[12px] max-[560px]:tracking-[1.8px]">
            <span className="h-px w-9 bg-[#d9b56a]" aria-hidden="true" />
            <span>{HERO.presented}</span>
            <span className="h-px w-9 bg-[#d9b56a]" aria-hidden="true" />
          </div>

          <h1 className="m-0 font-serif text-[clamp(56px,7vw,96px)] font-extrabold leading-[0.98] tracking-[-3px] text-[#fff5e4] max-[560px]:text-[53px] max-[560px]:tracking-[-2px]">
            {HERO.titleLead}{" "}
            <em className="not-italic text-[#e7c37a]">{HERO.titleEm}</em>
            <br />
            {HERO.titleYear}
          </h1>

          <p className="mb-2 mt-7 text-[19px] font-semibold leading-relaxed text-[#fff8ec] max-[560px]:text-[17px]">
            {HERO.subtitle}
          </p>

          <p className="max-w-[610px] text-[15px] leading-7 text-[#dfcec4] max-[560px]:leading-6">
            {HERO.text}
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3 max-[560px]:flex-col max-[560px]:items-stretch">
            <Button href="#application" variant="primary">
              {HERO.primaryCta}
              <span aria-hidden="true">→</span>
            </Button>

            <Button href="#process" variant="heroGhost">
              {HERO.ghostCta}
            </Button>
          </div>

          {/* Trust points */}
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.7px] text-[#cdbab0] max-[560px]:gap-x-4">
            {HERO.trust.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span
                  className="h-1 w-1 rounded-full bg-[#d9b56a]"
                  aria-hidden="true"
                />
                {item}
              </span>
            ))}
          </div>

          {/* Website / developer credit — premium badge */}
          <div className="relative mt-9 inline-flex max-w-full flex-col gap-3.5 overflow-hidden rounded-2xl border border-[#d9b56a70] bg-gradient-to-br from-[#2c1015f0] to-[#180810f5] px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.4)] backdrop-blur-md max-[560px]:w-full max-[560px]:px-5 max-[560px]:py-4">
            <span
              className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#e8c77f] to-transparent"
              aria-hidden="true"
            />

            <div className="flex items-center gap-2">
              <span className="text-[12px] text-[#e8c77f]" aria-hidden="true">
                ✦
              </span>
              <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-[#f0d9a3]">
                {HERO.credit.kicker}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              <a
                href={`tel:${DEVELOPER_PHONE_TEL}`}
                className="group flex items-center gap-3 text-[18px] font-bold leading-none tracking-[0.2px] text-[#fff8ec] transition-colors hover:text-[#f0d9a3]"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d9b56a80] bg-[#d9b56a26] text-[15px] transition-colors group-hover:bg-[#d9b56a45]"
                  aria-hidden="true"
                >
                  📞
                </span>
                {DEVELOPER_PHONE_DISPLAY}
              </a>

              <span
                className="h-8 w-px bg-[#d9b56a45] max-[430px]:hidden"
                aria-hidden="true"
              />

              <a
                href={DEVELOPER_PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[18px] font-bold leading-none tracking-[0.2px] text-[#fff8ec] transition-colors hover:text-[#f0d9a3]"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d9b56a80] bg-[#d9b56a26] text-[15px] transition-colors group-hover:bg-[#d9b56a45]"
                  aria-hidden="true"
                >
                  🔗
                </span>
                {DEVELOPER_PORTFOLIO_LABEL}
              </a>
            </div>
          </div>
        </div>

        {/* Right-side sponsor banner */}
        <div className="relative flex min-h-[500px] items-center justify-end max-[850px]:min-h-0 max-[850px]:justify-center">
          {/* Decorative background details */}
          <div
            className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9b56a26] max-[850px]:hidden"
            aria-hidden="true"
          />

          <div
            className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#d9b56a30] max-[850px]:hidden"
            aria-hidden="true"
          />

          <div
            className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9b56a12] blur-3xl"
            aria-hidden="true"
          />

          {/* Logo-only banner */}
          <div className="relative z-[2] w-full max-w-[470px] overflow-hidden rounded-[30px] border border-[#ead7b1] bg-[#fffdf8] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.38)]">
            <div
              className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#d2a956] to-transparent"
              aria-hidden="true"
            />

            <div className="flex items-center justify-center gap-3 pt-4">
              <span className="h-px w-8 bg-[#c99c4d]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#9b3642]">
                {HERO.sponsorsLabel}
              </span>
              <span className="h-px w-8 bg-[#c99c4d]" aria-hidden="true" />
            </div>

            <div className="flex min-h-[250px] flex-wrap items-center justify-center gap-6 rounded-[22px] px-8 pb-9 pt-5 max-[560px]:min-h-[180px] max-[560px]:gap-4 max-[560px]:px-5 max-[560px]:pb-6 max-[560px]:pt-4">
              {SPONSOR_LOGOS.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[92px] max-w-[180px] object-contain max-[560px]:h-[68px] max-[560px]:max-w-[135px]"
                />
              ))}
            </div>

            <div
              className="absolute bottom-0 left-1/2 h-[3px] w-24 -translate-x-1/2 rounded-t-full bg-[#c99c4d]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Text-only marquee */}
      <div className="absolute inset-x-0 bottom-0 z-[5] flex h-20 items-center overflow-hidden border-t border-[#e9dcc8] bg-[#fbf8f2] shadow-[0_-8px_30px_rgba(0,0,0,0.08)] max-[560px]:h-16">
        <div className="relative flex h-full w-full items-center overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-20 bg-gradient-to-r from-[#fbf8f2] to-transparent"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-20 bg-gradient-to-l from-[#fbf8f2] to-transparent"
            aria-hidden="true"
          />

          <div className="hero-marquee-track flex items-center">
            {renderMarqueeUnit(HERO.marquee, "marquee-a")}
            {renderMarqueeUnit(HERO.marquee, "marquee-b")}
          </div>
        </div>
      </div>
    </section>
  );
}
