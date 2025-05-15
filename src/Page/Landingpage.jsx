import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoClose } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { BiSolidError } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { FaGraduationCap } from "react-icons/fa6";
import { BiQrScan } from "react-icons/bi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import Contact from "../component/Contact";
import cap from "../assets/cap.jpg";
import cap1 from "../assets/cap1.jpg";
import cap3 from "../assets/cap3.jpg";
import Logos from "../component/Logos";

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
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const contactRef = useRef(null);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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

  const { src, title, subtitle } = images[currentImageIndex];

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
                <Link to="/about"><li className="cursor-pointer hover:text-blue-700">About</li></Link>
                <li
                  className="cursor-pointer hover:text-blue-700"
                  onClick={scrollToContact}
                >
                  Contact
                </li>
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
           <Link to="/about">
           <li
              className="cursor-pointer hover:text-blue-700"
              onClick={() => setIsOpen(false)}
            >
              About
            </li>
           </Link>
           <li
              className="cursor-pointer hover:text-blue-700"
              onClick={() => {
                scrollToContact();
                setIsOpen(false);
              }}
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
           <Link to="/login"> <button className="text-xs md:text-base w-[230px] md:w-[200px] text-white rounded-2xl py-3 font-semibold btn-primary hover:bg-blue-700 hover:text-blue-200 transition duration-300">
              Get Started
            </button></Link>
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
      <Logos/>
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

      <div ref={contactRef}><Contact /></div>
      <Footer />
    </div>
  );
};
export default Landingpage;
