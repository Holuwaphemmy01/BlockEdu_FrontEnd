import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import Sidebar2 from "../component/Sidebar2";
import { FiLogOut, FiCopy } from "react-icons/fi";
import wine from "../assets/wine.png";
import { IoIosNotifications } from "react-icons/io";

const Dashboard2 = () => {
    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [url, setUrl] = useState(""); // State for the generated URL

    const toggleDropdown = () => setOpen(!open);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/Landingpage");
    };

    const payload ={
      "studentId": localStorage.getItem("studentId"),
      "firstName": localStorage.getItem("firstName"),
      "lastName": localStorage.getItem("lastName"),
      "email": localStorage.getItem("email")
    };

    const token = localStorage.getItem("token");

    const handleGenerateLink = async () => {
        try {

            const response = await axios.post("http://localhost:8000/student/generate_url", payload, {

                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json", 
                },
            });
            setUrl("www.blockedu-credentials"+response.data); 
            setModalOpen(true);
        } catch (error) {
            console.error("Error generating link:", error);
        }
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(url); 
        alert("URL copied to clipboard!"); 
    };

    return (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
            <Sidebar2 />
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 mb-6">
                    <h1 className="text-[#4CAF50] font-bold text-xl md:text-2xl">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <IoIosNotifications size={20} />
                        <p className="flex cursor-pointer" onClick={handleLogout}>
                            <FiLogOut className="mt-1" />
                            Logout
                        </p>
                    </div>
                </div>
                <div className="bg-[#1E88E5] p-4 rounded-md flex items-center gap-4 hover:shadow-lg transition-all h-auto">
                    <img src={wine} alt="cap" className="w-28" />
                    <div>
                        <p className="sm:text-[30px] font-extrabold text-[20px]">
                            Welcome {localStorage.getItem("firstName") || "Guest"} {localStorage.getItem("lastName")}
                        </p>
                        <h3>Manage your academic credentials securely on the blockchain</h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-6">
                    {/* Credential Management Cards */}
                    <div className="bg-white p-4 rounded-2xl hover:shadow-xl transition-all h-auto mt-6 flex flex-col justify-between">
                        <div>
                            <p className="font-bold">My Credentials</p>
                            <p>Bachelor of Science</p>
                            <p>University of Example</p>
                            <p>Issued on January 25, 2025</p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="bg-[#1E88E5] text-white w-20 h-9 rounded-md">View</button>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl hover:shadow-xl transition-all h-auto mt-6 flex flex-col justify-between">
                        <div>
                            <p className="font-bold">Share Credentials</p>
                            <p>Generate a secure link or QR code to share your credentials</p>
                        </div>
                        <div className="relative flex justify-end mt-4">
                            <button
                                onClick={handleGenerateLink}
                                className="bg-[#4CAF50] text-white w-28 h-9 rounded-md"
                            >
                                Generate Link
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-md shadow-lg">
                        <p className="font-bold mb-4">Your Generated Link:</p>
                        <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
                            <span className="text-sm">{url}</span>
                            <FiCopy className="cursor-pointer" onClick={handleCopyToClipboard} />
                        </div>
                        <button
                            className="mt-4 bg-[#1E88E5] text-white w-full h-9 rounded-md"
                            onClick={() => setModalOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard2;