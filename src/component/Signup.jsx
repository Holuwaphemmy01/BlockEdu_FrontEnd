import React, { useState } from "react";
import { FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdDriveFileRenameOutline, MdLocationOn } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    motto: "",
    state: "",
    city: "",
    admin: "",
    email: "",
    phone: "",
    type: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name) errors.name = "Institution name is required";
    if (!formData.motto) errors.motto = "Motto is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.admin) errors.admin = "Admin name is required";

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }

    if (!formData.type) errors.type = "Institution type is required";

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const userData={
        email:formData.email,
        name:formData.name

      }
      localStorage.setItem("userDetails", JSON.stringify(userData));
      alert("Form submitted successfully");
      console.log(formData);
      navigate("/dashboard1", { state: formData });
    } else {
      alert("Form submission failed");
    }
  };

  const states = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa",
    "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger",
    "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe",
    "Zamfara", "Federal Capital Territory (FCT)"
  ];
  const types = ["Private", "Public"];

  return (
    <div className="max-w-[700px] mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10">
      <div className="flex justify-center">
        <img src={logo} alt="blockedu" className="w-[150px] h-auto" />
      </div>

      <h1 className="text-center font-extrabold mt-5 text-sm sm:text-xl">
        Register as an Institution
      </h1>

      <div className="space-y-6 mt-6">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="gap-1 flex mb-1 text-sm font-semibold text-gray-700">
            <MdDriveFileRenameOutline className="mt-1" /> Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Institution Name"
            className="h-14 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error.name && <p className="text-red-500 text-xs">{error.name}</p>}
        </div>

        {/* Motto */}
        <div className="flex flex-col">
          <label htmlFor="motto" className="text-sm font-semibold text-gray-700">Motto</label>
          <input
            type="text"
            name="motto"
            value={formData.motto}
            onChange={handleChange}
            placeholder="In God we trust"
            className="h-14 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error.motto && <p className="text-red-500 text-xs">{error.motto}</p>}
        </div>

        {/* State */}
        <div className="flex flex-col">
          <label htmlFor="state" className="gap-1 flex mb-1 text-sm font-semibold text-gray-700">
            <MdLocationOn className="mt-1" /> State
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="h-14 border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="">Select your state</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          {error.state && <p className="text-red-500 text-xs">{error.state}</p>}
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label htmlFor="city" className="text-sm font-semibold text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Institution City"
            className="h-14 border border-gray-300 rounded-lg px-4 py-2"
          />
          {error.city && <p className="text-red-500 text-xs">{error.city}</p>}
        </div>

        {/* Admin */}
        <div className="flex flex-col">
          <label htmlFor="admin" className="text-sm font-semibold text-gray-700">Admin</label>
          <input
            type="text"
            name="admin"
            value={formData.admin}
            onChange={handleChange}
            placeholder="Admin Name"
            className="h-14 border border-gray-300 rounded-lg px-4 py-2"
          />
          {error.admin && <p className="text-red-500 text-xs">{error.admin}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="gap-1 flex mb-1 text-sm font-semibold text-gray-700">
            <MdEmail className="mt-1" /> Official Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="h-14 border border-gray-300 rounded-lg px-4 py-2"
          />
          {error.email && <p className="text-red-500 text-xs">{error.email}</p>}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="gap-1 flex mb-1 text-sm font-semibold text-gray-700">
            <FaPhoneAlt className="mt-1" /> Phone Number
          </label>
          <div className="flex items-center">
            <span className="h-14 px-4 flex items-center border border-gray-300 rounded-l-lg bg-gray-100 text-gray-700">
              +234
            </span>
            <input
              type="tel"
              name="phone"
              maxLength={10}
              value={formData.phone}
              onChange={handleChange}
              placeholder="8123456789"
              className="h-14 w-full border border-l-0 border-gray-300 rounded-r-lg px-4 py-2"
            />
          </div>
          {error.phone && <p className="text-red-500 text-xs">{error.phone}</p>}
        </div>

        {/* Type */}
        <div className="flex flex-col">
          <label htmlFor="type" className="gap-1 flex mb-1 text-sm font-semibold text-gray-700">
            <MdLocationOn className="mt-1" /> Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="h-14 border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="">Select the Type</option>
            {types.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {error.type && <p className="text-red-500 text-xs">{error.type}</p>}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="gap-1 flex mb-1 text-sm font-semibold text-gray-700">
            <FaLock className="mt-1" /> Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="h-14 border border-gray-300 rounded-lg px-4 py-2"
          />
          {error.password && <p className="text-red-500 text-xs">{error.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="gap-1 flex mb-1 text-sm font-semibold text-gray-700">
            <GiConfirmed className="mt-1" /> Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className="h-14 border border-gray-300 rounded-lg px-4 py-2"
          />
          {error.confirmPassword && <p className="text-red-500 text-xs">{error.confirmPassword}</p>}
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2 text-xs sm:text-sm mt-3">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="remember" className="text-gray-700">
            Agree to the terms and privacy policy
          </label>
        </div>

        {/* Submit */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#1E88E5] rounded-xl text-white w-[255px] h-[60px] text-xl font-semibold hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
