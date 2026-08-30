import { useState, useRef, useCallback, useMemo } from "react";
import { GALLERY_DATA } from "../../data/content";
import { useTranslation } from "../../i18n/I18nContext.jsx";

// Split a flat array into `count` roughly-even chunks
const splitIntoRows = (arr, count) => {
  const rows = Array.from({ length: count }, () => []);
  arr.forEach((item, i) => rows[i % count].push(item));
  return rows;
};

const GalleryRow = ({ images, direction, speed, onSelect }) => {
  const { t } = useTranslation();
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const dragMoved = useRef(false);
  const dragStartX = useRef(0);
  const scrollStart = useRef(0);
  const [paused, setPaused] = useState(false);

  const looped =
    images.length < 6
      ? [...images, ...images, ...images]
      : [...images, ...images];

  const handlePointerDown = useCallback((e) => {
    isDragging.current = true;
    dragMoved.current = false;
    setPaused(true);
    dragStartX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
    trackRef.current?.setPointerCapture?.(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging.current || !trackRef.current) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const delta = dragStartX.current - x;
    if (Math.abs(delta) > 4) dragMoved.current = true;
    trackRef.current.scrollLeft = scrollStart.current + delta;
  }, []);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
    setTimeout(() => setPaused(false), 1500);
  }, []);

  return (
    <div
      ref={trackRef}
      className="relative flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing touch-pan-x"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => !isDragging.current && setPaused(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div
        className="flex shrink-0 gap-2 pr-2 sm:gap-3 sm:pr-3 md:gap-4 md:pr-4"
        style={{
          animation: `${direction === "reverse" ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {looped.map((url, index) => (
          <button
            key={`${url}-${index}`}
            type="button"
            onClick={() => {
              if (!dragMoved.current) onSelect(url);
            }}
            className="group relative aspect-square w-28 shrink-0 overflow-hidden bg-gray-100 sm:w-40 md:w-48 lg:w-56"
          >
            <img
              src={url}
              alt={t.ui.galleryImageAlt}
              loading="lazy"
              draggable={false}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </button>
        ))}
      </div>
    </div>
  );
};

const Gallery = ({ year: initialYear }) => {
  const { t } = useTranslation();
  const years = useMemo(
    () => Object.keys(GALLERY_DATA).sort((a, b) => b - a),
    [],
  );
  const [activeYear, setActiveYear] = useState(
    initialYear && GALLERY_DATA[initialYear] ? String(initialYear) : years[0],
  );
  const [selectedImage, setSelectedImage] = useState(null);

  const images = GALLERY_DATA[activeYear] || [];
  const rows = useMemo(() => splitIntoRows(images, 3), [images]);

  return (
    <section className="mx-auto w-full px-3 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10 lg:py-10">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Year selector */}
      <div className="mb-5 flex flex-wrap justify-center gap-2 sm:mb-6 sm:gap-3">
        {years.map((y) => (
          <button
            key={y}
            type="button"
            onClick={() => setActiveYear(y)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors sm:px-5 sm:py-2 sm:text-base ${
              activeYear === y
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {y}
          </button>
        ))}
      </div>

      {!images.length ? (
        <div className="py-10 text-center text-gray-500">
          {t.ui.galleryNoImages(activeYear)}
        </div>
      ) : (
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          {rows.map((rowImages, i) =>
            rowImages.length ? (
              <GalleryRow
                key={`${activeYear}-${i}`}
                images={rowImages}
                direction={i % 2 === 0 ? "forward" : "reverse"}
                speed={rowImages.length * 6 + i * 4}
                onSelect={setSelectedImage}
              />
            ) : null,
          )}
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 text-3xl leading-none text-white sm:right-6 sm:top-6"
            aria-label={t.ui.galleryCloseImage}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt={t.ui.gallerySelectedAlt}
            className="max-h-[85vh] max-w-[95vw] rounded-lg object-contain sm:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
