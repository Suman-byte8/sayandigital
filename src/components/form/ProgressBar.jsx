import { PROGRESS_STEPS } from '../../data/content.js'

export default function ProgressBar({ pct, stepIndex }) {
  return (
    <div className="h-[92px] grid grid-cols-6 items-center px-7 relative bg-[#fffaf5] border-b border-[#eee2d8] max-[850px]:overflow-x-auto max-[850px]:min-w-[680px] before:content-[''] before:absolute before:h-0.5 before:bg-[#dfd3ca] before:left-[70px] before:right-[70px] before:top-[35px]">
      {/* Fill */}
      <div
        className="absolute h-0.5 bg-[#a13a46] left-[70px] top-[35px] transition-all duration-[400ms] z-[1]"
        style={{ width: `calc((100% - 140px) * ${pct} / 100)` }}
      />

      {PROGRESS_STEPS.map((step, i) => {
        const n = i + 1
        const active = n === stepIndex
        const done = n < stepIndex
        const isHighlighted = active || done
        return (
          <div
            key={step.num}
            className={`text-center relative z-[2] text-[10px] ${
              isHighlighted ? 'text-[#7d2a36]' : 'text-[#9c8d86]'
            }`}
          >
            <b
              className={`grid place-items-center mx-auto w-7 h-7 rounded-full border-2 border-white text-[10px] ${
                isHighlighted ? 'bg-[#9c3442] text-white' : 'bg-[#f0e8e0] text-[#806f67]'
              }`}
            >
              {step.num}
            </b>
            <span className="block mt-[5px]">{step.label}</span>
          </div>
        )
      })}
    </div>
  )
}
