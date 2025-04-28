import { useState } from "react";
import { useParams } from "react-router-dom";

import leftIcon from "../../assets/icons/left_icon.png";
import rightIcon from "../../assets/icons/right_icon.png";
import banner_1 from "../../assets/itemsImage/flex&Banners/banner_1.png";
import banner_2 from "../../assets/itemsImage/flex&Banners/banner_2.png";
import banner_3 from "../../assets/itemsImage/flex&Banners/banner_3.png";
import banner_4 from "../../assets/itemsImage/flex&Banners/banner_4.png";

import CustomProduct from "./CustomProduct";
import CustomFlex from "./CutsomFlex";

const ProductInfo = ({
  title,
  subTitle,
  images = [], // Default to an empty array
  price,
  minQuantity, // Ensure this is received
}) => {
  const { route } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const bannerImages = [banner_1, banner_2, banner_3, banner_4];
  const isBannersRoute = route === "banners";
  const currentImages = isBannersRoute ? bannerImages : images;

  const handleNextImage = () => {
    if (currentImages.length > 0) {
      setCurrentImageIndex((currentImageIndex + 1) % currentImages.length);
    }
  };

  const handlePreviousImage = () => {
    if (currentImages.length > 0) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + currentImages.length) % currentImages.length
      );
    }
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 p-4 m-2 gap-4">
      <div className="_productImage w-full h-full relative">
        {currentImages.length > 1 && (
          <>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2"
              onClick={handlePreviousImage}
            >
              <img
                src={leftIcon}
                alt="Previous"
                className="object-cover w-[48px] h-auto"
              />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2"
              onClick={handleNextImage}
            >
              <img
                src={rightIcon}
                alt="Next"
                className="object-cover w-[48px] h-auto"
              />
            </button>
          </>
        )}
        <div className="_border border-2 border-black w-full h-auto p-6 bg-[#F4F6FF]">
          <div className="_image max-w-[430px] max-h-[420px] m-auto">
            {currentImages.length > 0 ? (
              <img
                src={currentImages[currentImageIndex]}
                alt="Product"
                className="object-contain h-[415px] w-[425px]"
              />
            ) : (
              <p className="text-center">No images available</p>
            )}
          </div>
        </div>
      </div>

      <div className="_productDetails w-full m-auto h-full">
        {isBannersRoute ? (
          <CustomFlex />
        ) : (
          <CustomProduct
            title={title}
            subTitle={subTitle}
            price={price}

          />
        )}
      </div>
    </div>
  );
};

export default ProductInfo;