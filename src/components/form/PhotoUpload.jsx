import { useEffect, useRef, useState } from 'react'
import { DOCUMENTS_SECTION } from '../../data/content.js'

const MAX_SIZE = 5 * 1024 * 1024 // 5 MB

export default function PhotoUpload({ onChange }) {
  const { photo } = DOCUMENTS_SECTION
  const [photos, setPhotos] = useState([]) // [{ file, url }]
  const inputRef = useRef(null)

  // Revoke object URLs on unmount to avoid memory leaks
  useEffect(() => {
    return () => photos.forEach((p) => URL.revokeObjectURL(p.url))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAdd = (e) => {
    const selected = [...e.target.files]
    const available = photo.max - photos.length
    const additions = selected
      .slice(0, available)
      .filter((file) => file.size <= MAX_SIZE)
      .map((file) => ({ file, url: URL.createObjectURL(file) }))
    const next = [...photos, ...additions]
    setPhotos(next)
    onChange?.(next.map((p) => p.file))
    e.target.value = ''
  }

  const removeAt = (index) => {
    URL.revokeObjectURL(photos[index].url)
    const next = photos.filter((_, i) => i !== index)
    setPhotos(next)
    onChange?.(next.map((p) => p.file))
  }

  return (
    <div className="mt-[22px] border border-dashed border-[#cfbcae] rounded-[12px] p-5">
      <div className="flex items-center justify-between gap-5 max-[560px]:items-start max-[560px]:flex-col">
        <div>
          <h4 className="m-0 text-[15px]">{photo.title}</h4>
          <p className="my-0.5 text-[10px] text-[#8c7c74]">{photo.hint}</p>
        </div>
        <label className="border border-[#a3434d] text-[#8e303b] rounded-[7px] px-3 py-2 text-[11px] font-bold cursor-pointer whitespace-nowrap">
          ছবি নির্বাচন
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            onChange={handleAdd}
            className="hidden"
          />
        </label>
      </div>

      {photos.length > 0 && (
        <div className="grid grid-cols-4 gap-2.5 mt-[18px] max-[560px]:grid-cols-2">
          {photos.map((p, i) => (
            <div key={p.url} className="h-[130px] rounded-lg overflow-hidden relative bg-[#eee]">
              <img src={p.url} alt="আপলোড করা পূজার ছবি" className="w-full h-full object-cover" />
              <button
                type="button"
                aria-label="ছবি মুছুন"
                onClick={() => removeAt(i)}
                className="absolute right-1.5 top-1.5 border-0 bg-[#4a1820dd] text-white rounded-full w-[25px] h-[25px]"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
