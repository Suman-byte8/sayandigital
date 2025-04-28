import React, { useState } from "react";
import OrderButton from "./OrderButton";

const CustomFlex = () => {
  const [length, setLength] = useState(0); // Length in feet
  const [width, setWidth] = useState(0); // Width in feet

  // Calculate area and price
  const calculatePrice = () => {
    const area = length * width; // Area in square feet
    const pricePerSqFt = 10; // ₹10 per square foot
    const totalPrice = area * pricePerSqFt;
    return totalPrice;
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white border rounded-md shadow-md">
      <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
        <li>Order from 1 unit.</li>
      </ul>

      <div className="space-y-4">
        {/* Length Input */}
        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-700">
            Length (ft)
          </label>
          <input
            id="length"
            type="number"
            value={length}
            min={1}
            onChange={(e) => setLength(e.target.value)}
            className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          />
        </div>

        {/* Width Input */}
        <div>
          <label htmlFor="width" className="block text-sm font-medium text-gray-700">
            Width (ft)
          </label>
          <input
            id="width"
            type="number"
            value={width}
            min={1}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          />
        </div>

        {/* Price and Actions */}
        <div className="space-y-2">
          <p className="text-orange-600 font-medium text-lg">
            ₹{calculatePrice().toFixed(2)} inclusive of all taxes
          </p>
          <a href="#" className="text-indigo-600 text-sm font-medium hover:underline">
            Buy in bulk and save
          </a>
        </div>

        <OrderButton 
          title="Flex & Banner" 
          price={calculatePrice()} 
          length={length} 
          width={width} 
        />
      </div>
    </div>
  );
};

export default CustomFlex;
