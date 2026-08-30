import { useEffect } from 'react'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock.js'
import { useTranslation } from '../../i18n/I18nContext.jsx'

export default function Modal({ open, onClose, children, showClose = true, cardClass = '' }) {
  const { t } = useTranslation()
  useBodyScrollLock(open)

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 bg-[#211015b8] backdrop-blur-[5px] grid place-items-center p-5 z-[100]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={`bg-[#fffaf5] w-[min(760px,100%)] max-h-[90vh] overflow-auto rounded-[16px] p-[35px] relative shadow-[0_30px_100px_#0004] max-[560px]:p-[28px_20px] ${cardClass}`}
      >
        {showClose && (
          <button
            onClick={onClose}
            aria-label={t.ui.close}
            className="absolute right-[18px] top-[15px] border-0 bg-none text-[27px] text-[#7a6b65]"
          >
            ×
          </button>
        )}
        {children}
      </div>
    </div>
  )
}
