import React, { useState, useEffect } from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#2c2c2c] text-white pt-8 pb-6 mt-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
     
        <div>
          <p className="font-bold mb-2">Company</p>
          <a href="/about" className="block hover:text-blue-500">About Us</a>
          <a href="/contact" className="block hover:text-blue-500">Contact</a>
          <a href="/privacy" className="block hover:text-blue-500">Privacy Policy</a>
        </div>

        <div>
          <p className="font-bold mb-2">Quick Links</p>
          <a href="/services" className="block hover:text-blue-500">Services</a>
          <a href="/terms" className="block hover:text-blue-500">Terms & Conditions</a>
          <a href="/faq" className="block hover:text-blue-500">FAQ</a>
        </div>

      
        <div>
          <p className="font-bold mb-2">Contact</p>
          <p>Email: support@blockedu.com</p>
          <p>Phone: 808643422145</p>
        </div>

    
        <div>
          <p className="font-bold mb-2">Subscribe to Our Newsletter</p>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md text-black w-full sm:w-auto flex-grow"
            />
            <button className="mt-2 sm:mt-0 sm:ml-2 bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 text-center px-2">
        <p className="text-sm flex items-center justify-center">
          &copy; {new Date().getFullYear()} BlockEdu. All rights reserved. | Secured with Blockchain
          <IoShieldCheckmarkSharp className="ml-2 text-[#4CAF50]" size={18} />
        </p>
      </div>

     
      <div className="flex justify-center flex-wrap mt-4 space-x-4 text-sm">
        <a href="https://facebook.com" className="hover:text-blue-500">Facebook</a>
        <a href="https://twitter.com" className="hover:text-blue-500">Twitter</a>
        <a href="https://linkedin.com" className="hover:text-blue-500">LinkedIn</a>
        <a href="https://instagram.com" className="hover:text-blue-500">Instagram</a>
      </div>

      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-50"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Footer;
