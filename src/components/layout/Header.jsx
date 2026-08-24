import { useState } from 'react'
import { BRAND, NAV_LINKS } from '../../data/content.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="h-[76px] bg-[rgba(255,252,247,0.94)] backdrop-blur-[14px] border-b border-[#eadfd3] sticky top-0 z-50">
      <div className="w-[min(1160px,calc(100%-40px))] mx-auto h-full flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-[#671f2d] text-[#f5d48b] grid place-items-center text-xs font-extrabold tracking-[1px]">
            {BRAND.mark}
          </span>
          <span>
            <strong className="block text-[15px]">{BRAND.name}</strong>
            <small className="block text-[10px] text-[#8c7067]">{BRAND.event}</small>
          </span>
        </a>

        {/* Mobile toggle */}
        <button
          className="hidden max-[850px]:block border-0 bg-none text-[25px]"
          aria-label="মেনু খুলুন"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>

        {/* Nav */}
        <nav
          className={`flex gap-7 text-sm text-[#5e504c] max-[850px]:absolute max-[850px]:left-5 max-[850px]:right-5 max-[850px]:top-[70px] max-[850px]:bg-white max-[850px]:p-3.5 max-[850px]:border max-[850px]:border-[#eadfd3] max-[850px]:rounded-[10px] max-[850px]:shadow-[0_15px_35px_#0001] max-[850px]:flex-col max-[850px]:gap-0 ${
            open ? 'max-[850px]:flex' : 'max-[850px]:hidden'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-[#9c3441] max-[850px]:p-2.5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
