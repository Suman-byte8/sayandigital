import React from "react";
import facebookIcon from "../assets/icons/facebook.png";
import instagramIcon from "../assets/icons/instagram.png";
import youtubeIcon from "../assets/icons/youtube.png";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="w-full h-auto my-2 sm:my-4 py-6 bg-white">
      {/* Horizontal divider line */}
      <div className="line w-full h-[1px] bg-[#9F9F9F] mb-4 sm:mb-6"></div>

      {/* Footer content container */}
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
        {props.page === "Go Back to Home" ? (
          <Link
            to="/"
            className="text-base sm:text-lg font-semibold text-[#999999] hover:text-gray-700"
          >
            Go Back to Home
          </Link>
        ) : (
          <Link
            to="/about-us"
            className="text-base sm:text-lg font-semibold text-[#999999] hover:text-gray-700"
          >
            About Us
          </Link>
        )}

        {/* Copyright text */}
        <div className="copyright text-sm sm:text-base text-center font-semibold text-[#999999] my-2 sm:my-0">
          ©2024 Sayan Digital Document Services Pvt. Ltd. All Rights Reserved.
        </div>

        {/* Social media links section */}
        <div className="social_links flex items-center gap-2 sm:gap-3 justify-center text-base sm:text-lg font-semibold text-[#999999]">
          Follow Us :
          {/* Facebook */}
          <a
            href="https://www.facebook.com/sayan.digital.2023"
            target="_blank"
            rel="noreferrer"
            className="w-[28px] h-auto"
          >
            <img src={facebookIcon} alt="facebook icon" />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@sayandigital362"
            target="_blank"
            rel="noreferrer"
            className="w-[28px] h-auto"
          >
            <img src={youtubeIcon} alt="youtube icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;