import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 
import axios from "axios"; 
import Sidebar2 from "../component/Sidebar2"; 
import { FiLogOut, FiCopy } from "react-icons/fi"; 
import wine from "../assets/wine.png"; 
import { IoIosNotifications } from "react-icons/io"; 

const Dashboard2 = () => {
    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [url, setUrl] = useState("");
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [credentialData, setCredentialData] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwordData, setPasswordData] = useState({ newPassword: "", confirmPassword: "" });



    useEffect(() => {
                const firstLogin = localStorage.getItem("studentFirstLogin");
                if (firstLogin === "true") {
                    setShowPasswordModal(true); 
                }
            }, []);


    const handlePasswordChange = (event) => {
            const { name, value } = event.target;
            setPasswordData((prev) => ({ ...prev, [name]: value }));
    };


        const handlePasswordSubmit = async () => {

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const payload = {
            "studentId": localStorage.getItem("studentId"),
            "firstName": localStorage.getItem("firstName"),
            "lastName": localStorage.getItem("lastName"),
            "studentMail": localStorage.getItem("studentEmail"),
            "newPassword": passwordData.newPassword,
        };


        
        try {
            console.log(payload);
            const token = localStorage.getItem("token");
            const response = await axios.post("http://localhost:8000/student/change-password", payload, {
                headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },

            });

            if (response.status === 200) {
                alert("Password updated successfully!");
                localStorage.setItem("studentFirstLogin", "false"); 
                setShowPasswordModal(false);
            } else {
                alert("Error updating password!");
            }
        } catch (error) {
            alert("Failed to update password: " + error.message);
        }
    };



    const toggleDropdown = () => setOpen(!open);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/Landingpage");
    };

    const payload = {
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
            setUrl("www.blockedu-credentials" + response.data);
            setModalOpen(true);
        } catch (error) {
            console.error("Error generating link:", error);
        }
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(url);
        alert("URL copied to clipboard!");
    };

    const handleViewCredential = async () => {
        try {
            const response = await axios.post("http://localhost:8000/student/download_credential", payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const data = response.data;
            const base64 = data.file;

            // Check MIME type for PDF or image
            const pdfMagic = atob(base64.substring(0, 30)).includes("%PDF");
            const mimeType = pdfMagic ? "application/pdf" : "image/png";

            // Create data URL
            const fileUrl = `data:${mimeType};base64,${base64}`;

            setFileUrl(fileUrl);
            setCredentialData(data);
            setViewModalOpen(true);
        } catch (error) {
            console.error("Error viewing credential:", error);
        }
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
                        <p className="font-bold">My Credentials</p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleViewCredential}
                                className="bg-[#1E88E5] text-white w-20 h-9 rounded-md"
                            >
                                View
                            </button>
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

            {viewModalOpen && credentialData && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
                    <div className="bg-white p-6 rounded-md shadow-lg max-w-3xl w-full">
                        <p className="font-bold mb-4 text-lg">Your Credential</p>
                        {fileUrl && (
                            <div className="mb-4">
                                {fileUrl.includes("application/pdf") ? (
                                    <object
                                        data={fileUrl}
                                        type="application/pdf"
                                        className="w-full h-[500px]"
                                    >
                                        <p>Your browser does not support PDF display. <a href={fileUrl} target="_blank" rel="noreferrer">Click here to view</a>.</p>
                                    </object>
                                ) : (
                                    <div
                                        className="w-full h-[500px] bg-center bg-contain bg-no-repeat"
                                        style={{ backgroundImage: `url(${fileUrl})` }}
                                    />
                                )}
                            </div>
                        )}
                        <div className="text-sm space-y-1">
                            <p><strong>Student Name:</strong> {credentialData.studentName}</p>
                            <p><strong>Student ID:</strong> {credentialData.studentId}</p>
                            <p><strong>Institution Name:</strong> {credentialData.institutionName}</p>
                            <p><strong>Institution Motto:</strong> {credentialData.institutionMotto}</p>
                            <p><strong>Issuance Date:</strong> {new Date(credentialData.issuanceDate).toDateString()}</p>
                            <p><strong>Issuance Time:</strong> {new Date(credentialData.issuanceTime).toLocaleString()}</p>
                            <p><strong>Blockchain Address:</strong> {credentialData.blockChainAddress}</p>
                        </div>
                        <button
                            className="mt-6 bg-[#1E88E5] text-white w-full h-9 rounded-md"
                            onClick={() => {
                                setViewModalOpen(false);
                                setFileUrl(null);
                                setCredentialData(null);
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            {showPasswordModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-md shadow-lg w-80">
                        <h2 className="text-lg font-bold text-center">Change Password</h2>
                        <input
                            type="password"
                            name="newPassword"
                            placeholder="New Password"
                            value={passwordData.newPassword}
                            onChange={handlePasswordChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={passwordData.confirmPassword}
                            onChange={handlePasswordChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                        />
                        <button
                            onClick={handlePasswordSubmit}
                            className="mt-6 bg-blue-600 text-white w-full h-10 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard2;
