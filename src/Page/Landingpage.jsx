import React from "react";
import logo from "../assets/logo.png";
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
import { useEffect } from "react";
import cap from "../assets/cap.jpg";
import cap1 from "../assets/cap1.jpg";
import cap3 from "../assets/cap3.jpg";
import Loader from "../component/Loader";

const images = [
  {
    src: cap,
    title: "Tamper-Proof Academic Credentials on the Blockchain",
    subtitle:
      "Securely store and instantly verify academic achievements with blockchain technology",
  },
  {
    src: cap1,
    title: "Verified Blockchain Records",
    subtitle:
      "Blockchain technology ensures that your credentials are safe and authentic",
  },
  {
    src: cap3,
    title: "Instant Academic Verification",
    subtitle:
      "Verify your academic credentials anytime, anywhere with blockchain-powered technology",
  },
];

const Landingpage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { src, title, subtitle } = images[currentImageIndex];

  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (event) => {};
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loader />;
  }

  const broken = [
    {
      icon: <BiSolidError className="text-[#F6A842]" size={30} />,
      title: "Slow paper-based processes",
    },
    {
      icon: <BiSolidError className="text-[#F6A842]" size={30} />,
      title: "Fraudulent certificates",
    },

    {
      icon: <BiSolidError className="text-[#f6a842]" size={30} />,
      title: "No real-time verification",
    },
  ];
  const fix = [
    {
      icon: <TiTick className="text-[#899B8A]" size={30} />,
      title: "Slow paper-based processes",
    },
    {
      icon: <TiTick className="text-[#899B8A]" size={30} />,
      title: "Fraudulent certificates",
    },
    {
      icon: <TiTick className="text-[#899B8A]" size={30} />,
      title: "No real-time verification",
    },
  ];
  const handleDone = (e) => {
    e.preventDefault();

    alert("Form submitted");
  };

  return (
    <div className="container mx-auto px-4">
      <div className="w-full relative">
        <div className="fixed top-0 left-0 z-50 bg-white shadow-md w-full px-4 py-2">
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
                <Link to="/signup">
                  <li className="cursor-pointer hover:text-blue-700">Signup</li>
                </Link>
              </ul>
            </nav>
          </div>
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
            <Link to="/signup">
              {" "}
              <li
                className="cursor-pointer hover:text-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Signup
              </li>
            </Link>
          </ul>
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 sm:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
      <div className="relative w-full min-h-[60vh] transition-all duration-1000">
        <img
          src={src}
          alt="title"
          className="w-full h-[60vh] md:h-[80vh] object-cover object-center mt-7 transition-opacity duration-1000"
        />
        <div className="bg-slate-700 md:bg-black md:opacity-45 absolute w-full h-full top-0 left-0 opacity-30"></div>
        <div className="absolute inset-0 bg-[#74a876] opacity-40 mix-blend-multiply"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white transition-transform">
            {title}
          </h1>
          <h4 className="mt-4 text-sm sm:text-base md:text-xl text-gray-50">
            {subtitle}
          </h4>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-10 max-w-md mx-auto">
            <button className="text-xs md:text-base w-[230px] md:w-[200px] text-white rounded-2xl py-3 font-semibold btn-primary hover:bg-blue-700 hover:text-blue-200 transition duration-300">
              Get Started
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-xs md:text-base w-[230px] md:w-[200px] text-[#4CAF50] rounded-2xl py-3 font-extrabold border-2 border-[#4CAF50] hover:bg-green-300 hover:text-green-800 transition duration-300"
            >
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
      <div id="how-it-works" className="mt-14 px-4">
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

      <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto bg-[#e0e0e0] mt-10">
        <h1 className="text-[#4CAF50] font-bold text-xl sm:text-2xl md:text-3xl mb-6">
          Get in touch, Quick response
        </h1>
        <h4>All fields are required</h4>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 mt-5">
            <div className="mb-4 flex-1">
              <label
                htmlFor="firstname"
                className="mb-1 text-sm font-semibold text-gray-700 block"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                required
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2 outline-none"
              />
            </div>

            <div className="mb-4 flex-1">
              <label
                htmlFor="lastname"
                className="mb-1 text-sm font-semibold text-gray-700 block"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                required
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="mb-4 flex-1">
              <label
                htmlFor="email"
                className="mb-1 text-sm font-semibold text-gray-700 block"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2 outline-none"
              />
            </div>
            <div className="mb-4 flex-1">
              <label
                htmlFor="matricId"
                className="mb-1 text-sm font-semibold text-gray-700 block"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="matricId"
                required
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2 outline-none"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 text-sm font-semibold text-gray-700 block"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              placeholder="Enter your message here..."
              className="w-full h-32 border border-gray-300 rounded-lg px-4 py-2 outline-none"
            ></textarea>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="bg-[#1E88E5] text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Landingpage;
