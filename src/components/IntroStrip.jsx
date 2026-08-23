export default function IntroStrip() {
  return (
    <section className="grid grid-cols-[repeat(2,1fr)] gap-4 py-12">
      <div className="self-center text-center">
        <strong className="text-xl font-semibold">০১</strong>
        <span>তথ্য পূরণ</span>
      </div>
      <div className="self-center text-center">
        <strong className="text-xl font-semibold">০২</strong>
        <span>নথি সংযুক্ত</span>
      </div>
      <div className="self-center text-center">
        <strong className="text-xl font-semibold">০৩</strong>
        <span>তথ্য যাচাই</span>
      </div>
      <div className="self-center text-center">
        <strong className="text-xl font-semibold">০৪</strong>
        <span>আবেদন জমা</span>
      </div>
    </section>
  );
}