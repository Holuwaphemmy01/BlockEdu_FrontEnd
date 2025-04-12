import React from "react";
import logo from "../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

export const Login = () => {
  return (
    <div className="max-w-[700px] mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10">
 
      <div className="flex justify-center">
        <img src={logo} alt="blockedu" className="w-[150px] h-auto" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-6">
        <h1 className="text-[#464A4C] font-extrabold text-xl sm:text-2xl">
          Empowering Education with Blockchain Security
        </h1>
        <h1 className="font-extrabold text-xl sm:text-2xl">Login</h1>
      </div>
      <div className="space-y-6">
  <div className="flex flex-col">
    <label htmlFor="email" className=" flex mb-1 text-sm font-semibold text-gray-700">
    <MdEmail  className="mt-1"/>Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="your@email.com"
      className=" h-14 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="password" className="mb-1 text-sm font-semibold text-gray-700 flex">
    <FaLock  className="mt-1 "/>Password
    </label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="••••••••"
      className="  h-14 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>
<div className="flex justify-between mt-5"> 
<div className="flex space-x-5 ">
    <h1 className="w-6 h-6 bg-gray-300"></h1>
    <h1>Rememeber me</h1>
</div>
<div className="text-[#1E88E5] font-extrabold">Forget Password?</div>
</div>
<div className="flex justify-center mt-6">
  <button
    type="submit"
    className="bg-[#1E88E5] rounded-xl text-white w-[255px] h-[70px] flex justify-center items-center text-xl font-semibold hover:bg-blue-700 transition duration-300"
  >
    Log In
  </button>
</div>
<h1 className="border bg-slate-400 w-full mt-5"></h1>
<div className="flex justify-center gap-7 mt-5">
    <h1 className="text-[#2c2c2c]">Don't have an account yet?</h1>
    <h1 className="text-[#4CAF50] font-extrabold">Sign Up</h1>
</div>




    </div>
  );
};

export default Login;
