import { AWARDS_SECTION } from '../../data/content.js'

export default function AwardsSection({ selected, error, onToggle }) {
  const s = AWARDS_SECTION
  return (
    <div id="awards-section" className="p-[42px] border-b border-[#eee5de] max-[560px]:px-[18px] max-[560px]:py-[27px]">
      <div className="flex gap-4 items-start mb-7">
        <span className="font-serif font-bold text-[28px] text-[#a03a47]">{s.num}</span>
        <div>
          <h3 className="font-serif font-bold text-[23px] m-0 text-[#40272a] max-[560px]:text-xl">
            {s.title}
          </h3>
          <p className="text-xs text-[#887873] my-0.5">{s.sub}</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 max-[850px]:grid-cols-2 max-[560px]:grid-cols-1">
        {s.options.map((opt) => {
          const checked = selected.includes(opt.value)
          return (
            <label
              key={opt.value}
              className={`border rounded-[10px] p-[18px] relative cursor-pointer transition-all duration-200 ${
                checked
                  ? 'border-[#a4434d] bg-[#fff7f1] shadow-[inset_0_0_0_1px_#a4434d]'
                  : 'border-[#e5dcd4] bg-[#fffdfa] hover:border-[#c79859]'
              }`}
            >
              <input
                type="checkbox"
                name="awards"
                value={opt.value}
                checked={checked}
                onChange={() => onToggle(opt.value)}
                className="absolute opacity-0"
              />
              <span
                className={`absolute right-3 top-3 w-[21px] h-[21px] border rounded-full text-xs grid place-items-center ${
                  checked ? 'bg-[#9f3744] text-white border-[#9f3744]' : 'border-[#d4c7bd] text-transparent'
                }`}
              >
                ✓
              </span>
              <b className="block text-sm mb-[3px]">{opt.title}</b>
              <small className="text-[10px] text-[#8c7b73]">{opt.desc}</small>
            </label>
          )
        })}
      </div>

      {error && <p className="text-[#b13b46] text-xs mt-3">{error}</p>}
    </div>
  )
}
