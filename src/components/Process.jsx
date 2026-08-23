export default function Process() {
  return (
    <section className="py-16 bg-gray-50" id="process">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-sm font-semibold mb-4">সহজ চার ধাপ</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">আবেদনের প্রক্রিয়া</h2>
          <p className="text-gray-600">কয়েকটি সহজ ধাপে আপনার পূজা কমিটির আবেদন সম্পূর্ণ করুন।</p>
        </div>
        <div className="grid grid-cols-[repeat(2,_1fr)] gap-6">
          <article className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <span className="text-2xl font-bold text-amber-200">০১</span>
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-xl font-bold">✎</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">তথ্য পূরণ করুন</h3>
            <p className="text-gray-600 text-sm">পূজা কমিটি ও আবেদনকারীর প্রয়োজনীয় তথ্য দিন।</p>
          </article>
          <article className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <span className="text-2xl font-bold text-amber-200">০২</span>
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-xl font-bold">↥</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">নথি সংযুক্ত করুন</h3>
            <p className="text-gray-600 text-sm">প্রয়োজনীয় নথি ও পূজার ছবি আপলোড করুন।</p>
          </article>
          <article className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <span className="text-2xl font-bold text-amber-200">০৩</span>
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-xl font-bold">✓</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">তথ্য যাচাই করুন</h3>
            <p className="text-gray-600 text-sm">জমা দেওয়ার আগে সম্পূর্ণ আবেদনটি একবার দেখে নিন।</p>
          </article>
          <article className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <span className="text-2xl font-bold text-amber-200">০৪</span>
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-xl font-bold">→</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">আবেদন জমা দিন</h3>
            <p className="text-gray-600 text-sm">আবেদন নম্বরটি সংরক্ষণ করে রাখুন।</p>
          </article>
        </div>
      </div>
    </section>
  );
}