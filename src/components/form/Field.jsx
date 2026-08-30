// Config-driven form field. Renders input / textarea / select
// based on the `field` definition from the active translation bundle.
import { useTranslation } from '../../i18n/I18nContext.jsx'

const inputBase =
  'w-full border rounded-lg px-[13px] text-[15px] text-[#302927] bg-[#fffdfa] outline-none transition-all duration-200 focus:border-[#a3444e] focus:shadow-[0_0_0_3px_#a3444e10] disabled:opacity-70 disabled:cursor-not-allowed'

export default function Field({ field, value, error, onChange }) {
  const { t } = useTranslation()
  const {
    name,
    label,
    type = 'text',
    required,
    full,
    placeholder,
    options,
    rows = 3,
    min,
    max,
    disabled,
    inputMode,
  } = field

  const borderClass = error ? 'border-[#bd4a52]' : 'border-[#dfd5ce]'
  const controlHeight = type === 'textarea' ? 'py-3 min-h-[95px] resize-y' : 'h-[47px] py-3'

  const handle = (e) => onChange(name, e.target.value)

  return (
    <label className={`flex flex-col gap-[7px] ${full ? 'col-span-full' : ''}`}>
      <span className="text-xs font-bold text-[#51443f]">
        {label} {required && <i className="text-[#a13340] not-italic">*</i>}
      </span>

      {type === 'textarea' ? (
        <textarea
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          value={value || ''}
          onChange={handle}
          className={`${inputBase} ${borderClass} ${controlHeight}`}
        />
      ) : type === 'select' ? (
        <select
          name={name}
          required={required}
          value={value || ''}
          onChange={handle}
          className={`${inputBase} ${borderClass} ${controlHeight}`}
        >
          <option value="">{t.ui.selectPlaceholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value || ''}
          onChange={handle}
          min={min}
          max={max}
          inputMode={inputMode}
          disabled={disabled}
          className={`${inputBase} ${borderClass} ${controlHeight} ${
            disabled ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        />
      )}

      {error && (
        <small className="text-[11px] text-[#b13b46]">
          {typeof error === 'string' ? error : t.validation.required}
        </small>
      )}
    </label>
  )
}
