export default function Hero({ onMenuToggle }) {
  return (
    <section
      className="relative min-h-[680px] overflow-hidden bg-gradient-to-b from-[#5f2a35] via-[#471a2a] to-[#30131d]"
    >
      <div
        className="absolute inset-0 opacity-8 bg-[radial-gradient(circle_at_78%_40%_#a03a46,transparent_1px),#fbf8f2]"
      />
      <div className="min-h-full relative z-10">
        <div className="grid min-h-full grid-cols-[1.05fr_0.95fr] gap-0 items-center relative z-20">
          <div className="hero-copy py-24 px-4">
            <div className="text-transform-uppercase text-sm tracking-wider text-amber-500 mb-4">Sayan Digital presents</div>
            <p className="text-2xl text-amber-100 mb-2">দুর্গাপূজা সম্মাননা ২০২৬</p>
            <h1 className="text-4xl lg:text-6xl font-bold leading-[1.02] text-white tracking-widest">শাড়দ <em className="text-amber-200">সম্মান</em><br />২০২৬</h1>
            <p className="mt-4 text-amber-100 text-lg">এবার শারদ সম্মানের আবেদন হোক আরও সহজ, দ্রুট ও ডিজিটাল। আপনার পূজা কমিটির তথ্য, পূজার বিবরণ ও প্রয়োজনীয় নথি জমা দিয়ে অংশগ্রহণ করুন।</p>
            <div className="mt-8 flex gap-3">
              <a href="#application" className="inline-block rounded bg-[#743542] px-6 py-3 text-white font-semibold hover:bg-[#9c3441] transition-colors">
                আবেদন শুরু করুন <span>→</span>
              </a>
              <a href="#process" className="inline-block rounded border-2 border-white/20 px-6 py-3 text-white font-semibold hover:bg-white/10 transition-colors">
                আবেদনের প্রক্রিয়া দেখুন
              </a>
            </div>
            <div className="mt-10 flex gap-3 text-amber-100 text-sm">
              <span>✓ অনলাইন আবেদন</span>
              <span>✓ সহজ প্রক্রিয়া</span>
              <span>✓ তথ্য যাচাই</span>
            </div>
          </div>
          <div className="hidden lg:block hero-art absolute right-0 top-0 bottom-0 w-80 transform -rotate-6 opacity-80">
            <div className="halo w-24 h-24 rounded-full bg-amber-100 opacity-20"></div>
            <div className="sun w-16 h-16 rounded-full bg-amber-200 opacity-30"></div>
            <div className="lotus w-8 h-8 text-amber-300">✦</div>
            <div className="art-ring w-32 h-32 ring-2 ring-amber-200 opacity-40 one"></div>
            <div className="art-ring w-40 h-40 ring-2 ring-amber-300 opacity-30 two"></div>
            <div className="alpana w-6 h-6 text-amber-300">◌</div>
            <div className="alpana w-6 h-6 text-amber-300">✧</div>
            <div className="vertical-line w-full h-[2px] bg-amber-100 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}