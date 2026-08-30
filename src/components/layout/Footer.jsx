import { useTranslation } from '../../i18n/I18nContext.jsx'
import { DEVELOPER_PORTFOLIO_URL } from '../../data/content.js'

export default function Footer() {
  const { t } = useTranslation()
  const FOOTER = t.footer

  return (
    <footer className="bg-[#32151c] text-[#eadfd5] pt-[55px]">
      <div className="w-[min(1160px,calc(100%-40px))] mx-auto grid grid-cols-[2fr_1fr_1fr] gap-[50px] pb-10 max-[850px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-5">
        {/* Brand column */}
        <div>
          <div className="text-[#dcb76b] text-xs tracking-[2px] uppercase">{FOOTER.brand}</div>
          <h2 className="font-serif font-semibold text-[29px] my-1">{FOOTER.heading}</h2>
          <p className="text-xs text-[#bbaaa3] leading-[2]">{FOOTER.tagline}</p>
        </div>

        {/* Contact column */}
        <div>
          <b className="text-[13px] text-[#fff1df]">{FOOTER.contactTitle}</b>
          <p className="text-xs text-[#bbaaa3] leading-[2]">
            {FOOTER.contact.map((line, i) => (
              <span key={i}>
                {line}
                {i < FOOTER.contact.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        {/* Important links column */}
        <div>
          <b className="text-[13px] text-[#fff1df]">{FOOTER.importantTitle}</b>
          <p className="text-xs text-[#bbaaa3] leading-[2]">
            {FOOTER.important.map((link, i) => (
              <span key={link.href}>
                <a href={link.href} className="hover:text-[#e2bd71]">
                  {link.label}
                </a>
                {i < FOOTER.important.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="border-t border-[#5b363d] text-center py-[17px] text-[10px] text-[#98847e]">
        {FOOTER.copyright}
        <span className="mx-1.5">·</span>
        {FOOTER.madeBy}{' '}
        <a
          href={DEVELOPER_PORTFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c9a262] hover:text-[#e2bd71] underline underline-offset-2"
        >
          {FOOTER.developerName}
        </a>
      </div>
    </footer>
  )
}
