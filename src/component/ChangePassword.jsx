import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const ChangePassword = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const user = state || JSON.parse(localStorage.getItem("userDetails"));

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit =async(event) => {
    event.preventDefault();
    const { newPassword, confirmPassword } = formData;

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const email = localStorage.getItem("email");
    formData.email = email;
    try {
      console.log(formData);
      const response = await axios.post("http://localhost:8000/student/change_password", formData);
      if (response.data.status === "success") {
        
        navigate("/dashboard2"); 
      }
      else {
        setError(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      }

  };

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
      <h2 className="text-xl font-bold mb-4 mt-4 j">Change Your Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={formData.newPassword}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
