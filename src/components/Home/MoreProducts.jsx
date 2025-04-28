import React from 'react';
import ProductCard from '../Cards/ProductCard';
import { Link } from 'react-router-dom';
import products from '../../data/moreProducts';

const MoreProducts = () => {
  return (
    <div className="w-full grid gap-y-8 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
      {/* Section Title with decorative lines */}
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <div className="h-[1px] bg-gray-300 flex-grow"></div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold whitespace-nowrap text-[#A2A2A2]">
          More Products
        </h2>
        <div className="h-[1px] bg-gray-300 flex-grow"></div>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  gap-6">
        {products.map((product) => (
          <div

            key={product.id}
            className="flex items-center justify-center m-2 sm:m-0"
          >
            <ProductCard
              id={product.id}
              title={product.title}
              subTitle={product.subTitle}
              price={product.price}
              image={product.image_1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MemoizedMoreProducts = React.memo(MoreProducts);

export default MemoizedMoreProducts;
