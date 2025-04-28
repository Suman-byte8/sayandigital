

const ItemCard = ({ title, image, width, height, variant = "full" }) => {
  const widthClass = width === "100%" ? "w-full" : `w-[${width}px]`;
  const heightStyle = { height: `${height}px` };
  const widthStyle = { width: `${width}px` };

  if (variant === "imageOnly") {
    return (
      <div
        className={`rounded-lg drop-shadow-xl overflow-hidden flex-shrink-0 ${widthClass}`}
        style={heightStyle}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
    );
  }

  return (
    <div
      className="rounded-lg drop-shadow-xl overflow-hidden flex-shrink-0 flex flex-col"
      style={{ ...widthStyle, ...heightStyle }}
    >
    <div className="w-full h-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-center hover:scale-105 transition-transform duration-300"
          />
        </div>

      <div className="border-b p-2 bg-[#FBFBFB]">
        <h3 className="text-gray-600 font-semibold text-md truncate text-center">
          {title}
        </h3>
      </div>

    </div>
  );
};

export default ItemCard;
