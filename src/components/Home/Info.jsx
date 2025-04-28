import React from "react";
import ItemCard from "../Cards/ItemCard";

const Info = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6">
      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4C4C4C]">
        Sayan Digital: Your Destination for Innovation and Excellence in
        Printing
      </h1>

      {/* Section 1: Introduction and Services Overview */}
      <div className="space-y-2 sm:space-y-3">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
          Need assistance with your concept? Connect with us today, and let's
          turn your ideas into reality!
        </h2>
        <p className="text-sm sm:text-base text-[#999999] text-pretty font-semibold">
          Sayan Digital provides over 5,000 print products and 15,000+
          customizable gifts, all available in the quantities that fit your
          unique needs! From small to large-scale orders, we handle it all with
          ease.
        </p>
        <p className="text-sm sm:text-base text-[#999999] text-pretty font-semibold">
          Experience exceptional service, high-quality prints, and smooth
          delivery, whether you shop online or visit us in-store.
        </p>
      </div>

      {/* Section 2: Shipping and Delivery Information */}
      <div className="space-y-2 sm:space-y-3">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
          Reliable Shipping and Delivery Across West Bengal
        </h2>
        <p className="text-sm sm:text-base text-[#999999] text-pretty font-semibold">
          We deliver to all accessible pin codes across West Bengal. Sayan
          Digital can also support you with corporate gift kits or print
          materials for special events. Let us handle the logistics while you
          focus on growing your business!
        </p>
      </div>

      {/* Section 3: Pricing and Order Quantities */}
      <div className="space-y-2 sm:space-y-3">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
          Order starting from just 1 item, with prices that fit your budget
          perfectly!
        </h2>
        <p className="text-sm sm:text-base text-[#999999] text-pretty font-semibold">
          We know that not everyone needs large quantities for their first
          marketing materials. Whether you're refreshing packaging or testing a
          new service before the launch, you don't need 100 t-shirts — just 5
          will do.
        </p>
        <p className="text-sm sm:text-base text-[#999999] text-pretty font-semibold">
          That's why we offer single and low-quantity orders at prices that are
          both affordable and budget-friendly.
        </p>
      </div>

      {/* Section 4: Call to Action and Contact Information */}
      <div className="space-y-2 sm:space-y-3">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
          Glad to have you on board! Get in touch with us today to discuss your
          project and let's bring your vision to life.
        </h2>
        <p className="text-sm sm:text-base text-[#999999] text-pretty font-semibold">
          Contact us at{" "}
          <a href="mailto:info@sayandigital.com">sayan177123@gmail.com</a> or
          call us at +91 77976 07126 to get started.
        </p>
        <a href="mailto:sayan177123@gmail.com" className="">
          <button className="bg-[#4C4C4C] text-white mt-4 py-2 px-4 rounded-md hover:bg-[#333333]">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
};

export default Info;
