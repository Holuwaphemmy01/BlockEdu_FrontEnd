import React from "react";
import logo from "../assets/logo.png";
import cap from "../assets/cap1.jpg";
import { IoClose } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { BiSolidError } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { FaGraduationCap } from "react-icons/fa6";
import { BiQrScan } from "react-icons/bi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
const Landingpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const broken = [
    {
      icon: <BiSolidError className="text-[#F6A842]" size={30} />,
      title: "Slow paper-based processes",
    },
    {
      icon: <BiSolidError className="text-[#F6A842]" size={30} />,
      title: "Fradulent certificates",
    },
    {
      icon: <BiSolidError className="text-[#f6a842]" size={30} />,
      title: "No real-time verfication",
    },
  ];
  const fix = [
    {
      icon: <TiTick className="text-[#899B8A]" size={30} />,
      title: "Slow paper-based processes",
    },
    {
      icon: <TiTick className="text-[#899B8A]" size={30} />,
      title: "Fradulent certificates",
    },
    {
      icon: <TiTick className="text-[#899B8A]" size={30} />,
      title: "No real-time verfication",
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <div className="w-full relative">
        <div className="flex items-center justify-between">
          <img src={logo} alt="blockedu" className="w-[150px] h-auto" />

          <div className="sm:hidden">
            <button onClick={() => setIsOpen(true)}>
              <GiHamburgerMenu size={28} />
            </button>
          </div>

          <nav className="hidden sm:flex">
            <ul className="flex space-x-6 text-lg font-medium text-[#2C2C2C]">
              <li className="cursor-pointer hover:text-blue-700">About</li>
              <li className="cursor-pointer hover:text-blue-700">Contact</li>
              <Link to="login">
                <li className="cursor-pointer hover:text-blue-700">Login</li>
              </Link>
              <li className="cursor-pointer hover:text-blue-700">Signup</li>
            </ul>
          </nav>
        </div>

        <div
          className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } sm:hidden`}
        >
          <div className="flex justify-end p-4">
            <IoClose
              size={28}
              className="cursor-pointer text-gray-600"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="flex justify-center pt-6">
            <img src={logo} alt="blockedu" className="w-[150px] h-auto" />
          </div>

          <ul className="flex flex-col px-6 space-y-6 text-lg font-medium text-[#2C2C2C] mt-9">
            <li
              className="cursor-pointer hover:text-blue-700"
              onClick={() => setIsOpen(false)}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </li>
            <Link to="login">
           
              <li
                className="cursor-pointer hover:text-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Login
              </li>
            </Link>
            <li
              className="cursor-pointer hover:text-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Signup
            </li>
          </ul>
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 sm:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>

      <div className="relative w-full">
        <img
          src={cap}
          alt="graduationcap"
          className="w-full h-[60vh] md:h-[80vh] object-cover object-center mt-7"
        />

        <div className="absolute inset-0 bg-[#74a876] opacity-40 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white transition-transform">
            Tamper-Proof Academic Credentials on the Blockchain
          </h1>
          <h4 className="mt-4 text-sm sm:text-base md:text-xl text-gray-200">
            Securely store and instantly verify academic achievements with
            blockchain technology
          </h4>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-10 max-w-md mx-auto">
  <Link to="/login">
    <button className="text-xs md:text-base w-[280px] md:w-[300px] text-white rounded-2xl py-3 font-semibold bg-[#1E88E5] hover:bg-blue-700 hover:text-blue-200 transition duration-300">
      Get Started
    </button>
  </Link>

  <button className="text-xs md:text-base border border-[#4CAF50] w-[280px] md:w-[300px] text-[#4CAF50] rounded-2xl py-3 font-semibold hover:bg-[#93da95] hover:text-[#4CAF50] transition duration-300">
    How it works
  </button>
</div>


        </div>
      </div>
      <div className="bg-[#757575] w-full mt-10 flex flex-col md:flex-row md:space-x-20 space-y-10 md:space-y-0 items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <h1 className="flex justify-center items-center gap-2 text-white text-center text-lg md:text-xl font-semibold">
            <IoClose className="text-red-600" size={30} /> THE BROKEN
            CREDENTIALS SYSTEM
          </h1>
          <div className="border border-dashed w-full mt-5"></div>
          <div className="mt-12 flex flex-col space-y-4">
            {broken.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-4 flex items-center space-x-4"
              >
                {item.icon}
                <p className="text-gray-800 font-medium">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="border border-dashed w-full mt-10"></div>
        </div>
        <div className="w-full max-w-md">
          <h1 className="flex justify-center items-center gap-2 text-white text-center text-lg md:text-xl font-semibold">
            <IoShieldCheckmarkSharp className="text-[#4CAF50]" size={20} />{" "}
            BLOCKEDU FIXES THIS
          </h1>
          <div className="border border-dashed w-full mt-5"></div>
          <div className="mt-12 flex flex-col space-y-4">
            {fix.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-4 flex items-center space-x-4"
              >
                {item.icon}
                <p className="text-gray-800 font-medium">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="border border-dashed w-full mt-10"></div>
        </div>
      </div>
      <div className="mt-14 px-4">
        <h1 className="text-2xl md:text-4xl font-extrabold text-[#2C2C2C] text-center md:text-left mb-10">
          How it Works
        </h1>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="text-[#464A4C] font-extrabold flex flex-col items-center text-center">
            <FaGraduationCap className="text-[#132028]" size={80} />
            <p className="mt-2">University Issues digital credential.</p>
          </div>
          <div className="text-[#464A4C] font-extrabold flex flex-col items-center text-center">
            <BiQrScan size={80} />
            <p className="mt-2">Student shares via link/QR code.</p>
          </div>
          <div className="text-[#464A4C] font-extrabold flex flex-col items-center text-center">
            <IoMdCheckmarkCircle className="text-[#4CAF50]" size={80} />
            <p className="mt-2">Employer verifies in seconds.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Landingpage;
