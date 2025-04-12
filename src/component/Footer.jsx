import React from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full bg-[#2c2c2c] text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <div className="mt-4">
          <a href="/about" className="text-white hover:text-blue-500 mx-2">
            About Us
          </a>
          <a href="/contact" className="text-white hover:text-blue-500 mx-2">
            Contact
          </a>
          <a href="/privacy" className="text-white hover:text-blue-500 mx-2">
            Privacy Policy
          </a>
          <p className="text-sm flex items-center justify-center mt-4">
            &copy; BlockEdu. All rights reserved. | Secured with Blockchain
            <IoShieldCheckmarkSharp className="ml-2 text-[#4CAF50]" size={18} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
