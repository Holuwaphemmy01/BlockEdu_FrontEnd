import React, { useRef } from "react";
import yaba from "../assets/yaba.png";
import unilag from "../assets/unilag.png";
import stanbic from "../assets/stanbic.png";
import learn from "../assets/learn.png";
import semicolon from "../assets/semicolon.png";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";


const Logos = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 relative px-10">
    
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 md:left-6 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        <MdArrowBackIos size={24} />
      </button>
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto px-10 scrollbar-hide"
        style={{
          scrollbarWidth: "none", 
          msOverflowStyle: "none", 
        }}
      >
        <div
          className="flex gap-16 md:gap-24 lg:gap-96 py-6 w-max"
          style={{ overflow: "hidden" }}
        >
          <img src={yaba} alt="Yaba logo" className="h-16 w-auto  transition duration-300" />
          <img src={unilag} alt="Unilag logo" className="h-16 w-auto transition duration-300" />
          <img src={stanbic} alt="Stanbic logo" className="h-16 w-auto transition duration-300" />
          <img src={learn} alt="Learn logo" className="h-16 w-auto transition duration-300 " />
          <img src={semicolon} alt="Semicolon logo" className="h-16 w-auto  transition duration-300" />
        </div>
      </div>

     
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 md:right-6 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        <MdArrowForwardIos size={24} />
      </button>
    </div>
  );
};

export default Logos;
