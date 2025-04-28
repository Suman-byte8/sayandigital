import React, { useEffect } from 'react'
import penList from '../../data/ItemList/penList';
import PreviewCard from '@/components/Cards/PreviewCard.jsx';

const PenPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      return (
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#4A4A4A] mb-8">
          Explore Our Pens Collection
        </h1>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {penList.map((card, index) => (
            <PreviewCard
              key={index}
              id={card.id}
              title={card.title}
              subTitle={card.subTitle}
              price={`${card.price}`}
              image={card.image}
              className="transition-transform transform hover:scale-105 bg-white shadow-lg rounded-md overflow-hidden"
              minQuantity={card.minQuantity}
            />
          ))}
        </div>
      </div>
      );
}

export default PenPage
