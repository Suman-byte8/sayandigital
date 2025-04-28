import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import OrderModal from "../Modals/OrderModal";

const OrderButton = ({ title, price, quantity, length, width }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const orderDetails = {
    title,
    price,
    length,
    width,
  };

  return (
    <>
      <div
        className="w-full bg-[#4882ff] p-2 my-4 rounded-md flex items-center justify-center cursor-pointer"
        onClick={handleOpen}
      >
        <span className="text-lg md:text-2xl font-bold text-white">Buy Now</span>
      </div>
      <OrderModal open={open} handleClose={handleClose} orderDetails={orderDetails} quantity={quantity||""} />
      <ToastContainer />
    </>
  );
};

export default OrderButton;
