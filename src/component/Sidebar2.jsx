import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaHouseUser, FaBars } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { Link, Navigate } from "react-router-dom";
import { LuStickyNote } from "react-icons/lu";
import { FaHistory } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const  navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    

    navigate("/");



  };

  return (
    <>
      <div className="md:hidden p-4 bg-[#2C2C2C] text-white flex justify-between items-center">
        <img src={logo} alt="blockedu" className="w-[120px]" />
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          <FaBars />
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex fixed md:static bg-[#2C2C2C] text-white h-full w-64 px-6 py-8 flex-col justify-between z-50 transition-all duration-300`}
      >
        <div>
          <img src={logo} alt="blockedu" className="w-[150px] h-auto mx-auto mb-12 hidden md:block" />
          <div className="flex flex-col gap-6 font-bold">
            <Link to="/dashboard2">
              <button className="flex items-center gap-3 hover:bg-[#A5A1A1] rounded-lg px-4 py-2 transition">
                <FaHouseUser /> Dashboard
              </button>
            </Link>
            <button className="flex items-center gap-3 hover:bg-[#A5A1A1] rounded-lg px-4 py-2 transition">
            <LuStickyNote />My Credentails
            </button>
            
              <button className="flex items-center gap-3 hover:bg-[#A5A1A1] rounded-lg px-4 py-2 transition">
              <FaHistory />Share History
              </button>
            
            <button className="flex items-center gap-3 hover:bg-[#A5A1A1] rounded-lg px-4 py-2 transition">
              <IoMdSettings /> Settings
            </button>
          </div>
        </div>
        <div className="font-bold">
          
          
            <button onClick={handleLogout} className="flex items-center gap-3 hover:bg-[#A5A1A1] rounded-lg px-4 py-2 w-full transition">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar2;
