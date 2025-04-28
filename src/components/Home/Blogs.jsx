import React from "react";
import blog1 from "../../assets/blogs/Blog_1.png";
import blog2 from "../../assets/blogs/Blog_2.png";

const Blogs = () => {
  return (
    <div className="w-full  p-4 sm:p-6 lg:p-8 my-4 sm:my-6 lg:my-8 lg:flex items-center justify-between">
      {/* Left Section - Blog Introduction */}
      <div className="w-full  flex flex-col justify-start sm:justify-center p-4 sm:p-6 lg:p-8 gap-4 sm:gap-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#B07FD3] leading-tight">
          From The Blogs
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#999999]">
          Explore the world of print with us on our blog!
        </p>
        <p className="text-sm sm:text-lg lg:text-xl font-medium text-[#5D5D5D] leading-relaxed">
          From selecting the perfect paper to crafting remarkable, high-quality
          prints, join us as we dive into every detail that brings your creative
          vision to life.
        </p>
      </div>

      {/* Middle and Right Sections - Blog Banners */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-10 lg:mt-12 md:flex-row">
        <a
          href="https://medium.com/@8759127658itisaha/introducing-our-new-e-commerce-platform-for-customizable-products-sayan-digital-4e4a99617bb0"
          className="w-full "
        >
          <div className="w-full h-auto cursor-pointer overflow-hidden shadow-lg rounded-md transition-transform duration-300 hover:scale-105">
            <img
              src={blog1}
              alt="Blog post 1"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </a>
        <a
          href="https://medium.com/@8759127658itisaha/how-to-attract-customers-increase-brand-awareness-and-boost-sales-for-your-customized-gift-shop-b1ade8be5263"
          className="w-full "
        >
          <div className="w-full h-auto cursor-pointer overflow-hidden shadow-lg rounded-md transition-transform duration-300 hover:scale-105">
            <img
              src={blog2}
              alt="Blog post 2"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Blogs;
