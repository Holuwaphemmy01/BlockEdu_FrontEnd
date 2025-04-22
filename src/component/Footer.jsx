import React, { useState, useEffect } from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

   
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-[#2c2c2c] text-white py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
    
      
        <div className="mt-4 md:mt-0">
          <a href="/about" className="text-white hover:text-blue-500 mx-2 block">
            About Us
          </a>
          <a href="/contact" className="text-white hover:text-blue-500 mx-2 block">
            Contact
          </a>
          <a href="/privacy" className="text-white hover:text-blue-500 mx-2 block">
            Privacy Policy
          </a>
        </div>

       
        <div className="mt-4 md:mt-0">
          <p className="font-bold">Quick Links</p>
          <a href="/services" className="text-white hover:text-blue-500 mx-2 block">Services</a>
          <a href="/terms" className="text-white hover:text-blue-500 mx-2 block">Terms & Conditions</a>
          <a href="/faq" className="text-white hover:text-blue-500 mx-2 block">FAQ</a>
        </div>

        <div className="mt-4 md:mt-0">
          <p>Contact us at:</p>
          <p>Email: support@blockedu.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>

        
        <div className="mt-4 md:mt-0">
          <p className="font-bold">Subscribe to Our Newsletter</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md w-64 text-black"
            />
            <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">Subscribe</button>
          </div>
        </div>

      </div>

    
      <div className="flex justify-center items-center mt-4">
        <p className="text-sm flex items-center">
          &copy; BlockEdu. All rights reserved. | Secured with Blockchain
          <IoShieldCheckmarkSharp className="ml-2 text-[#4CAF50]" size={18} />
        </p>
      </div>

  
      <div className="flex justify-center mt-4">
        <a href="https://facebook.com" className="text-white hover:text-blue-500 mx-2">Facebook</a>
        <a href="https://twitter.com" className="text-white hover:text-blue-500 mx-2">Twitter</a>
        <a href="https://linkedin.com" className="text-white hover:text-blue-500 mx-2">LinkedIn</a>
        <a href="https://instagram.com" className="text-white hover:text-blue-500 mx-2">Instagram</a>
      </div>

      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          ↑
        </button>
      )}

    </div>
  );
};

export default Footer;
