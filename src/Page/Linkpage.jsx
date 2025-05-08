import React from "react";
import logo from "../assets/logo.png";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const Linkpage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="text-center mt-8">
        <img src={logo} alt="blockedu" className="w-[150px] h-auto mx-auto" />
      </div>

      <div className="flex-grow items-center justify-center px-4 text-center mt-5">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Welcome to BlockEdu</h1>
          <p className="text-gray-600">
            Your credentials are secure and verified through blockchain technology.
            {/* <br />
            Please follow the next steps to proceed. */}
          </p>
        </div>
      </div>
      <footer className="text-center py-4 border-t">
        <p>
          &copy; {new Date().getFullYear()} BlockEdu. All rights reserved. | Secured with Blockchain
          <span className="text-blue-500 ml-2 inline-block align-middle">
            <IoShieldCheckmarkSharp />
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Linkpage;
