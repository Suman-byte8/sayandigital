import { useTranslation } from "../../i18n/I18nContext.jsx";
import Button from "../ui/Button.jsx";
import pcBg from "../../assets/pc_view_background.webp";
import mobileBg from "../../assets/mobile_view_background.png";

export default function Hero() {
  const { t } = useTranslation();
  const HERO = t.hero;
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[680px] hero-bg text-[#fff3df] after:content-[''] after:absolute after:inset-x-[-5%] after:bottom-[-180px] after:top-auto after:h-[360px] after:rounded-[50%] after:bg-[#fbf8f2]"
    >
      {/* Background — desktop */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat max-[850px]:hidden"
        style={{ backgroundImage: `url(${pcBg})` }}
        aria-hidden="true"
      />

      {/* Background — mobile */}
      <div
        className="absolute inset-0 z-0 hidden bg-cover bg-center bg-no-repeat max-[850px]:block"
        style={{ backgroundImage: `url(${mobileBg})` }}
        aria-hidden="true"
      />

      {/* Readability overlay */}
      <div
        className="absolute inset-0 z-[1] bg-[linear-gradient(100deg,#2a0f14e6_0%,#2a0f14b3_45%,#2a0f1459_100%)] max-[850px]:bg-[linear-gradient(180deg,#2a0f14e0_0%,#2a0f14c9_60%,#2a0f14a6_100%)]"
        aria-hidden="true"
      />

      {/* Dotted pattern */}
      <div className="absolute inset-0 z-[1] opacity-[0.08] hero-dots" />

      <div className="w-[min(1160px,calc(100%-40px))] mx-auto min-h-[680px] grid grid-cols-[1.05fr_0.95fr] items-center relative z-[2] max-[850px]:grid-cols-1 max-[850px]:min-h-0">
        {/* Copy */}
        <div className="py-[65px] pb-[100px] max-[850px]:py-[70px] max-[850px]:pb-[140px]">
          <div className="flex items-center gap-3 uppercase tracking-[2px] text-[15px] text-[#e8c77f] mb-5 max-[560px]:text-[13px]">
            <span className="w-9 h-px bg-[#d9b56a]" />
            {HERO.presented}
            <span className="w-9 h-px bg-[#d9b56a]" />
          </div>

          {/* <p className="text-[21px] font-medium text-[#e9c985] mb-2 max-[560px]:text-[17px]">
            {HERO.eyebrow}
          </p> */}

          <h1 className="font-serif font-extrabold text-[clamp(60px,7vw,98px)] leading-[1.02] tracking-[-3px] m-0 text-[#fff5e4] max-[560px]:text-[57px]">
            {HERO.titleLead}{" "}
            <em className="not-italic text-[#e7c37a]">{HERO.titleEm}</em>
            <br />
            {HERO.titleYear}
          </h1>

          <p className="text-[19px] font-semibold mt-[25px] mb-2 max-[560px]:text-base">
            {HERO.subtitle}
          </p>
          <p className="max-w-[610px] text-[#e5d4ca] text-[15px]">
            {HERO.text}
          </p>

          <div className="flex gap-3 flex-wrap mt-[30px] max-[560px]:flex-col max-[560px]:items-stretch">
            <Button href="#application" variant="primary">
              {HERO.primaryCta} <span>→</span>
            </Button>
            <Button href="#process" variant="heroGhost">
              {HERO.ghostCta}
            </Button>
          </div>

          <div className="flex gap-5 mt-7 text-[11px] text-[#cdbab0] flex-wrap max-[560px]:gap-y-2 max-[560px]:gap-x-4">
            {HERO.trust.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* Decorative art */}
        <div
          className="h-[510px] relative max-[850px]:hidden"
          aria-hidden="true"
        >
          <div className="absolute w-[420px] h-[420px] border border-[#cfa96755] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_36px_#ffffff04,0_0_0_72px_#ffffff03]" />
          <div className="absolute w-[205px] h-[205px] rounded-full bg-[radial-gradient(circle,#dcb05e,#9a3d43)] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_80px_#d6a44d35]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%] text-[85px] text-[#f4d995] [text-shadow:0_0_30px_#fff1b050]">
            ✦
          </div>
          <div className="absolute w-[300px] h-[460px] border border-[#dcb86e55] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[25deg]" />
          <div className="absolute w-[460px] h-[300px] border border-[#dcb86e55] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[25deg]" />
          <div className="absolute text-[#dcb86e] text-[70px] opacity-[0.65] left-[2%] top-[8%]">
            ◌
          </div>
          <div className="absolute text-[#dcb86e] text-[70px] opacity-[0.65] right-[3%] bottom-[8%]">
            ✧
          </div>
          <div className="absolute top-[5%] bottom-[5%] left-1/2 border-l border-dashed border-[#dcb86e30]" />
        </div>
      </div>
    </section>
  );
}
