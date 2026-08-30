import { useTranslation } from '../../i18n/I18nContext.jsx'
import Button from '../ui/Button.jsx'

export default function Declaration({ agreed, onAgreeChange }) {
  const { t } = useTranslation()
  const DECLARATION = t.declaration
  return (
    <div className="p-[42px] bg-[#fffcf8] max-[560px]:px-[18px] max-[560px]:py-[27px]">
      <div className="flex gap-4 p-5 border border-[#eadfcf] bg-[#fff8ea] rounded-[10px]">
        <div className="w-[38px] h-[38px] rounded-full bg-[#9f3744] text-white grid place-items-center flex-none">
          ✓
        </div>
        <div>
          <h3 className="text-base m-0">{DECLARATION.title}</h3>
          <p className="text-xs text-[#77685f] my-1 mb-[13px]">{DECLARATION.text}</p>
          <label className="flex gap-2.5 items-center text-xs font-bold">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => onAgreeChange(e.target.checked)}
              className="accent-[#9d3543] w-4 h-4"
            />
            <span>{DECLARATION.agree}</span>
          </label>
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={!agreed}
        className="mt-5 disabled:opacity-[0.45] disabled:cursor-not-allowed disabled:transform-none"
      >
        {DECLARATION.submit} <span>→</span>
      </Button>
    </div>
  )
}
