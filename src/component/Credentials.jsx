import React from "react";
import Sidebar from "../component/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Credentials = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const selectedCredentials = Array.from(
      document.querySelectorAll("input[name='credentials']:checked")
    ).map((input) => input.value);

    const studentData = {
      studentId: document.getElementById("matricId").value,
      studentMail: document.getElementById("email").value,
      lastName: `${document.getElementById("lastname").value}`,
      firstName: `${document.getElementById("firstname").value}`,
      institutionId: localStorage.getItem("id"),
      institutionName: localStorage.getItem("institutionName"),
    };

    const token = localStorage.getItem("token");
    const file = document.getElementById("fileUpload").files[0]; 

    if (!token) {
      alert("Token is missing. Please log in again.");
      return;
    }

    if (!file) {
      alert("Please upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); 
    formData.append("data", JSON.stringify(studentData)); 

    try {
     
      console.log("Form Data:", formData);


      await axios.post("https://blockedu.onrender.com/institution/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", 
        },
      });

      alert("Student added successfully");
      navigate("/dashboard1");
    } catch (error) {
      
      console.error("Error submitting student data:", error);
      alert("Failed to add student. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-tr from-[#E3F2FD] to-[#275b86]">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
        <h1 className="text-[#4CAF50] font-bold text-xl sm:text-2xl md:text-3xl mb-6">
          Add New Student
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
         
          <div className="flex flex-col md:flex-row gap-4">
            <div className="mb-4 flex-1">
              <label htmlFor="firstname" className="mb-1 text-sm font-semibold text-gray-700 block">
                Student First Name
              </label>
              <input
                type="text"
                id="firstname"
                required
                placeholder="Enter First Name"
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div className="mb-4 flex-1">
              <label htmlFor="lastname" className="mb-1 text-sm font-semibold text-gray-700 block">
                Student Last Name
              </label>
              <input
                type="text"
                id="lastname"
                required
                placeholder="Enter Last Name"
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="mb-4 flex-1">
              <label htmlFor="email" className="mb-1 text-sm font-semibold text-gray-700 block">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="Enter Email Address"
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div className="mb-4 flex-1">
              <label htmlFor="matricId" className="mb-1 text-sm font-semibold text-gray-700 block">
                Matriculation ID
              </label>
              <input
                type="text"
                id="matricId"
                required
                placeholder="Enter Matriculation ID"
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Select Document Type:</h3>
            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" value="Transcript" name="credentials" className="peer hidden" />
                <div className="w-5 h-5 rounded-full border border-gray-500 peer-checked:bg-green-500"></div>
                <span>Transcript</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" value="Certificate" name="credentials" className="peer hidden" />
                <div className="w-5 h-5 rounded-full border border-gray-500 peer-checked:bg-green-500"></div>
                <span>Certificate</span>
              </label>
            </div>

            <div>
              <label htmlFor="fileUpload" className="block font-medium">
                Upload Document(s):
              </label>
              <input
                type="file"
                id="fileUpload"
                name="documents"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                className="mt-2 block w-full sm:w-auto"
              />
            </div>

         
            <button
              type="submit"
              className="bg-[#1E88E5] text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Credentials;