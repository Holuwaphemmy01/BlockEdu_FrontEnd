import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

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

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setSubmitting(true);
      try {
        await new Promise((res) => setTimeout(res, 2000));
        const userDetails={
          email:formData.email,
          name: formData.name
        }
        localStorage.setItem("userDetails", JSON.stringify(formData));
        console.log("Form submitted successfully", formData);
      } finally {
        setSubmitting(false);
      }
      navigate("/dashboard1", { state: formData });
    } else {
      setError(errors);
    }
  };

  // useEffect(() => {
  //   const storedUserDetails = localStorage.getItem("userDetails");
  //   if (storedUserDetails) {
  //     navigate("/dashboard1", { state: JSON.parse(storedUserDetails) });
  //   }
  // }, [navigate]);

  
  

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

      <div className="space-y-6 mt-9">
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
            className={`h-14 border ${
              error.email ? "border-red-500" : "border-gray-300"
            } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
              error.email ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
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
            className={`h-14 border ${
              error.password ? "border-red-500" : "border-gray-300"
            } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
              error.password ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
        </div>
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
          Forgot Password?
        </div>
      </div>

      <div className="flex justify-center mt-6">
      <button
  type="submit"
  onClick={handleSubmit}
  disabled={submitting}
  className="bg-[#1E88E5] rounded-xl text-white w-[255px] h-[60px] flex justify-center items-center text-base sm:text-xl font-semibold hover:bg-blue-700 transition duration-300"
>
  {submitting ? "Submitting..." : "Log In"}
</button>

      </div>

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
