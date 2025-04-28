import React, { useState } from "react";
import { Link } from "react-router-dom";
import storeLogo from "../assets/logos/store_logo.png";
import hamIcon from "../assets/icons/hamburger.png";
import crossIcon from "../assets/icons/cross.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#C6E7FF] h-[60px] sm:h-[80px] flex items-center justify-between p-3 sm:p-4 shadow-md relative z-20 ">
      {/* Container for the inner content with specific width */}
      <div className="max-w-[1400px] w-full flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="w-[150px] sm:w-[200px]">
          <img
            src={storeLogo}
            alt="store logo"
            className="w-full object-contain cursor-pointer"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
