import ProductInfo from "../components/ProductPage/ProductInfo";
import OrderTagLine from "../components/ProductPage/OrderTagLine";
import WPButton from "../components/ProductPage/OrderButton";
import DeliveryBanner from "../components/ProductPage/DeliveryBanner";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductProvider } from "../context/ProductContext.jsx";

const ProductPage = () => {
  const location = useLocation();
  const { title, subTitle, images, price, minQuantity } = location.state || {};
  const [quantity, setQuantity] = useState(minQuantity); // State for quantity
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // console.log("Min Quantity:", minQuantity);
  // console.log("Received minQuantity:", minQuantity);

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <ProductInfo
        title={title}
        subTitle={subTitle}
        images={images}
        price={price}
        minQuantity={minQuantity}
        onQuantityChange={setQuantity} // Pass the setter function to CustomProduct
      />
      <OrderTagLine />
      <ProductProvider>
      </ProductProvider>
      <DeliveryBanner />
    </div>
  );
};

export default ProductPage;
