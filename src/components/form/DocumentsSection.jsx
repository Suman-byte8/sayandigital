import { useState } from 'react'
import { useTranslation } from '../../i18n/I18nContext.jsx'

const MAX_SIZE = 5 * 1024 * 1024 // 5 MB

function UploadRow({ doc, onFile, ui }) {
  const [status, setStatus] = useState({ text: ui.noFileSelected, ok: null })

  const handleFile = (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (file.size > MAX_SIZE) {
      e.target.value = ''
      setStatus({ text: ui.fileTooLarge, ok: false })
      onFile(null) // clear any previously hoisted selection
      return
    }
    setStatus({ text: file.name, ok: true })
    onFile(file)
  }

  const statusColor =
    status.ok === true ? 'text-[#397348]' : status.ok === false ? 'text-[#b13b46]' : 'text-[#8c7b73]'

  return (
    <div className="grid grid-cols-[1fr_auto_180px] items-center gap-[15px] border border-[#e7ded6] rounded-[10px] px-[17px] py-[15px] max-[850px]:grid-cols-[1fr_auto]">
      <div>
        <b className="text-[13px]">{doc.title}</b>
        <small className="block text-[10px] text-[#8c7c74]">{doc.hint}</small>
      </div>
      <label className="border border-[#a3434d] text-[#8e303b] rounded-[7px] px-3 py-2 text-[11px] font-bold cursor-pointer whitespace-nowrap">
        {ui.chooseFile}
        <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFile} className="hidden" />
      </label>
      <span className={`text-[10px] overflow-hidden text-ellipsis whitespace-nowrap max-[850px]:col-span-full ${statusColor}`}>
        {status.text}
      </span>
    </div>
  )
}

export default function DocumentsSection({ onDocFile }) {
  const { t } = useTranslation()
  const s = t.documentsSection
  return (
    <div id="documents" className="p-[42px] border-b border-[#eee5de] max-[560px]:px-[18px] max-[560px]:py-[27px]">
      <div className="flex gap-4 items-start mb-7">
        <span className="font-serif font-bold text-[28px] text-[#a03a47]">{s.num}</span>
        <div>
          <h3 className="font-serif font-bold text-[23px] m-0 text-[#40272a] max-[560px]:text-xl">
            {s.title}
          </h3>
          <p className="text-xs text-[#887873] my-0.5">{s.sub}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {s.docs.map((doc) => (
          <UploadRow key={doc.id} doc={doc} onFile={(file) => onDocFile(doc.id, file)} ui={t.ui.documents} />
        ))}
      </div>
    </div>
  )
}
