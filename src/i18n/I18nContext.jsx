import { createContext, useContext, useMemo, useState } from 'react'
import en from './translations/en.js'
import bn from './translations/bn.js'

const translations = { en, bn }
const STORAGE_KEY = 'appLanguage'
const DEFAULT_LANG = 'bn'

const I18nContext = createContext(null)

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'en' || stored === 'bn' ? stored : DEFAULT_LANG
  } catch {
    // localStorage can throw in some private-browsing modes — fall back quietly.
    return DEFAULT_LANG
  }
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang)

  const setLang = (next) => {
    if (next !== 'en' && next !== 'bn') return
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Ignore write failures — the choice just won't persist across reloads.
    }
  }

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

// Returns { lang, setLang, t } — `t` is the full translation bundle for the
// currently selected language (default Bengali; the user must explicitly
// switch to English, this never reads the browser's language).
export function useTranslation() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useTranslation must be used within an I18nProvider')
  }
  return ctx
}
