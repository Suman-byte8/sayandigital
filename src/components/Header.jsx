import Link from 'next/link';

export default function Header({ onMenuToggle }) {
  return (
    <header className="bg-[#fff2f0] border-b-1 border-[#eadfd3] sticky top-0 z-50 h-[76px]">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        <Link href="#home" className="flex items-center gap-2 text-gray-800">
          <span className="font-bold text-xl">SD</span>
          <span><strong>Sayan Digital</strong><small>শারদ সম্মান ২০২৬</small></span>
        </Link>
        <button
          className="hidden md:hidden text-gray-600 hover:text-[#9c3441] mb-2"
          aria-label="মেনু খুলুন"
          onClick={onMenuToggle}
        >
          ☰
        </button>
        <nav className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
          <Link href="#home" onClick={onMenuToggle} className="hover:text-[#9c3441]">
            হোম
          </Link>
          <Link href="#process" onClick={onMenuToggle} className="hover:text-[#9c3441]">
            আবেদন প্রক্রিয়া
          </Link>
          <Link href="#documents" onClick={onMenuToggle} className="hover:text-[#9c3441]">
            প্রয়োজনীয় নথি
          </Link>
          <Link href="#application" onClick={onMenuToggle} className="hover:text-[#9c3441]">
            আবেদন করুন
          </Link>
        </nav>
      </div>
    </header>
  );
}