import React from 'react';
import { allCategories } from '../../data/allCategories';
import ItemCard from '../Cards/ItemCard';
import { Link } from 'react-router-dom';

const AllCategories = () => {
  return (
    <div className="w-full grid gap-y-6 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      {/* Section Title with decorative lines */}
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <div className="h-[1px] bg-gray-300 flex-grow"></div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold whitespace-nowrap text-[#A2A2A2]">
          Customized Categories
        </h2>
        <div className="h-[1px] bg-gray-300 flex-grow"></div>
      </div>
      
      {/* Grid container */}
      <div className="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-6  sm:m-0 mx-auto ">
        {allCategories.map((item) => (
          <Link to={`/product/${item.route}`} key={item.id} className='flex items-center justify-center m-2 sm:m-0'>
          <ItemCard 
            {...item} 
            width={window.innerWidth <= 640 ? 100 : 137} 
            height={window.innerWidth <= 640 ? 140 : 170} 
          />
        </Link>
        
        ))}
      </div>
    </div>
  );
};

const MemoizedAllCategories = React.memo(AllCategories);

export default MemoizedAllCategories;
