import { useTranslation } from '../../i18n/I18nContext.jsx'

// Small always-visible pill toggle — never inferred from the browser,
// the user picks explicitly. Switching only swaps displayed text; it
// doesn't remount the form, so entered values are untouched.
export default function LanguageSwitcher() {
  const { lang, setLang, t } = useTranslation()
  const labels = t.ui.languageSwitcher

  return (
    <div
      role="group"
      aria-label={labels.label}
      className="flex items-center border border-[#dfd1c4] rounded-full p-[3px] text-[11px] font-bold bg-white"
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`px-2.5 py-1 rounded-full transition-colors duration-150 ${
          lang === 'en' ? 'bg-[#9c3442] text-white' : 'text-[#7a6b65] hover:text-[#4d1823]'
        }`}
      >
        {labels.en}
      </button>
      <button
        type="button"
        onClick={() => setLang('bn')}
        aria-pressed={lang === 'bn'}
        className={`px-2.5 py-1 rounded-full transition-colors duration-150 ${
          lang === 'bn' ? 'bg-[#9c3442] text-white' : 'text-[#7a6b65] hover:text-[#4d1823]'
        }`}
      >
        {labels.bn}
      </button>
    </div>
  )
}
