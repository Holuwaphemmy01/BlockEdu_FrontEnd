import React, { useState } from "react";
import logo from "../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateField = (name, value) => {
    if (name === "email") {
      if (!value) return "Email is required";
      if (!/\S+@\S+\.\S+/.test(value)) return "Email is invalid";
    }
    if (name === "password") {
      if (!value) return "Password is required";
      if (value.length < 6) return "Password must be at least 6 characters";
    }
    return "";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const fieldError = validateField(name, value);
    setError((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError,
    }));
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((key) => {
      const fieldError = validateField(key, formData[key]);
      if (fieldError) errors[key] = fieldError;
    });
    return errors;
  };

  const handleSubmit=async(event)=>{
    event.preventDefault();

   

  
    try {

      console.log(formData);
      const response = await axios.post('https://blockedu.onrender.com/auth/login', formData);

      console.log(response)
      console.log(response.data)

      if (response.status == 200){
        if(response.data.role =="ROLE_INSTITUTION"){
        console.log("Navigating to dashboard1...");
        alert("Login Successful")
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("id",response.data.id)
        localStorage.setItem("officialMail",response.data.officialMail)
        localStorage.setItem("institutionName",response.data.name)

        navigate("/dashboard1");
        }      
       else{
        alert("Login Successful")
        console.log(response.data);
        localStorage.setItem("firstName", response.data.firstName);
        localStorage.setItem("lastName", response.data.lastName);
        localStorage.setItem("studentId", response.data.studentId);
        localStorage.setItem("studentEmail", response.data.email);
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("studentFirstLogin", response.data.studentFirstLogin)
        navigate("/dashboard2");
       }
      }      
      else{
        console.log(response.data.status)
  
        setError(response.data.message);
      }
      
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    }
  }


  return (
    <div className="max-w-[700px] mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10">
      <div className="flex justify-center">
        <img src={logo} alt="blockedu" className="w-[150px] h-auto" />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-6">
        <h1 className="text-[#464A4C] font-extrabold text-[11px] sm:text-2xl mx-auto">
          Empowering Education with Blockchain Security
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 mt-9">
        <div className="flex flex-col">
          <label htmlFor="email" className="flex mb-1 text-sm font-semibold text-gray-700">
            <MdEmail className="mt-1 mr-1" /> Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            aria-describedby="email-error"
            className={`h-14 border ${error.email ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${error.email ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
          />
          {error.email && <p id="email-error" className="text-red-500 text-sm mt-1">{error.email}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 text-sm font-semibold text-gray-700 flex">
            <FaLock className="mt-1 mr-1" /> Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            aria-describedby="password-error"
            className={`h-14 border ${error.password ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${error.password ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
          />
          {error.password && <p id="password-error" className="text-red-500 text-sm mt-1">{error.password}</p>}
        </div>

        <div className="flex sm:flex-row justify-between items-center mt-5 gap-2 sm:gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="remember" className="text-gray-700">
              Remind me
            </label>
          </div>

          <div className="text-[#1E88E5] font-semibold cursor-pointer whitespace-nowrap">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={submitting}
            className="bg-[#1E88E5] rounded-xl text-white w-[255px] h-[60px] flex justify-center items-center text-base sm:text-xl font-semibold hover:bg-blue-700 transition duration-300"
          >
            {submitting ? "Submitting..." : "Log In"}
          </button>
        </div>
      </form>

      <hr className="bg-slate-400 w-full mt-5" />

      <div className="flex sm:flex-row justify-center items-center sm:gap-2 gap-1 mt-5 text-center text-xs sm:text-sm">
        <h1 className="text-[#2c2c2c]">Don't have an account yet?</h1>
        <Link to="/signup" className="text-[#4CAF50] font-bold">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;

