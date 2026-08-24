import Field from './Field.jsx'

// Renders a numbered form section header + a config-driven field grid.
export default function FormSection({ section, values, errors, onChange, id }) {
  return (
    <div id={id} className="p-[42px] border-b border-[#eee5de] max-[560px]:px-[18px] max-[560px]:py-[27px]">
      <div className="flex gap-4 items-start mb-7">
        <span className="font-serif font-bold text-[28px] text-[#a03a47]">{section.num}</span>
        <div>
          <h3 className="font-serif font-bold text-[23px] m-0 text-[#40272a] max-[560px]:text-xl">
            {section.title}
          </h3>
          <p className="text-xs text-[#887873] my-0.5">{section.sub}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[19px] max-[850px]:grid-cols-1">
        {section.fields.map((field) => (
          <Field
            key={field.name}
            field={field}
            value={values[field.name]}
            error={errors[field.name]}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  )
}
