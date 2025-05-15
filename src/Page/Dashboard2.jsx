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
            studentId: localStorage.getItem("studentId"),
            firstName: localStorage.getItem("firstName"),
            lastName: localStorage.getItem("lastName"),
            studentMail: localStorage.getItem("studentEmail"),
            newPassword: passwordData.newPassword,
        };

        try {
            const token = localStorage.getItem("token");
            const response = await axios.post("https://blockedu.onrender.com/student/change-password", payload, {
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
        studentId: localStorage.getItem("studentId"),
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        email: localStorage.getItem("email"),
    };

    const token = localStorage.getItem("token");

    const handleGenerateLink = async () => {
        try {
            const response = await axios.post("https://blockedu.onrender.com/student/generate_url", payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            setUrl("http://localhost:5173/linkpage" + response.data);
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
            setCredentialData({ loading: true, error: null });
    
            const payload = {
                studentId: localStorage.getItem("studentId"),
                firstName: localStorage.getItem("firstName"),
                lastName: localStorage.getItem("lastName"),
                email: localStorage.getItem("studentEmail"),
            };

            const pdfResponse = await axios.post(
                "https://blockedu.onrender.com/student/download_credential",
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    responseType: 'json'  
                }
            );
            
            const byteCharacters = atob(pdfResponse.data.file);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'application/pdf' });
            const blobUrl = URL.createObjectURL(blob);
            setFileUrl(blobUrl);
            
            const metadata = {
                studentName: pdfResponse.data.studentName,
                studentId: pdfResponse.data.studentId,
                institutionName: pdfResponse.data.institutionName,
                institutionMotto: pdfResponse.data.institutionMotto,
                issuanceDate: new Date(pdfResponse.data.issuanceDate).toLocaleDateString(),
                issuanceTime: new Date(pdfResponse.data.issuanceTime).toLocaleTimeString(),
                blockchainAddress: pdfResponse.data.blockChainAddress,
            };
            console.log("Metadata:", metadata.studentId + " " + metadata.studentName );
    
            setCredentialData({
                ...metadata,
                loading: false,
            });
            
            setViewModalOpen(true);
    
        } catch (error) {
            console.error("PDF Error Details:", {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status
            });
            
            let errorMessage = "Failed to load credential. ";
            if (error.response?.data?.message) {
                errorMessage += error.response.data.message;
            }
            
            setCredentialData({
                error: errorMessage,
                loading: false
            });
            setViewModalOpen(true);
        }
    };
    
    return (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
            <Sidebar2 />
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-[#4CAF50] font-bold text-2xl">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <IoIosNotifications size={20} />
                        <p className="flex cursor-pointer" onClick={handleLogout}>
                            <FiLogOut className="mt-1" />
                            Logout
                        </p>
                    </div>
                </div>

                <div className="bg-[#1E88E5] p-4 rounded-md flex items-center gap-4 text-white">
                    <img src={wine} alt="cap" className="w-28" />
                    <div>
                        <p className="text-2xl font-bold">
                            Welcome {localStorage.getItem("firstName")} {localStorage.getItem("lastName")}
                        </p>
                        <p>Manage your academic credentials securely on the blockchain</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <p className="font-bold">My Credentials</p>
                        <button
                            onClick={handleViewCredential}
                            className="mt-4 bg-[#1E88E5] text-white px-4 py-2 rounded-md"
                        >
                            View
                        </button>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <p className="font-bold mb-2">Share Credentials</p>
                        <p>Generate a secure link or QR code to share your credentials</p>
                        <button
                            onClick={handleGenerateLink}
                            className="mt-4 bg-[#4CAF50] text-white px-4 py-2 rounded-md"
                        >
                            Generate Link
                        </button>
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

{viewModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b p-4">
                <h2 className="text-xl font-bold text-gray-800">
                    {credentialData?.studentName ? `${credentialData.studentName}'s Credential` : 'View Credential'}
                </h2>
                <button 
                    onClick={() => {
                        setViewModalOpen(false);
                        if (fileUrl) URL.revokeObjectURL(fileUrl);
                    }}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                    &times;
                </button>
            </div>

            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                <div className="w-full md:w-2/3 bg-gray-100 p-2">
                    {credentialData?.loading ? (
                        <div className="h-full flex items-center justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                        </div>
                    ) : fileUrl ? (
                        <div className="h-full flex flex-col">
                            <object
                                data={`${fileUrl}#toolbar=1&navpanes=0`}
                                type="application/pdf"
                                aria-label="PDF document"
                                className="w-full h-[80vh] rounded-md"
                            >
                                <p>Your browser does not support inline PDFs. Please download the PDF to view it.</p>
                            </object>
                        </div>
                    ) : (
                        <div className="h-full flex items-center justify-center">
                            <p className="text-red-500">{credentialData?.error || 'No PDF available'}</p>
                        </div>
                    )}
                </div>

                {credentialData && !credentialData.loading && !credentialData.error && (
                    <div className="w-full md:w-1/3 p-4 overflow-y-auto">
                        <h3 className="font-bold text-lg mb-4 text-gray-700">Credential Details</h3>
                        <div className="space-y-4">
                            <div><strong>Student Name:</strong> {credentialData.studentName}</div>
                            <div><strong>Student ID:</strong> {credentialData.studentId}</div>
                            <div><strong>Institution Name:</strong> {credentialData.institutionName}</div>
                            <div><strong>Institution Motto:</strong> {credentialData.institutionMotto}</div>
                            <div><strong>Issuance Date:</strong> {credentialData.issuanceDate}</div>
                            <div><strong>Issuance Time:</strong> {credentialData.issuanceTime}</div>
                            <div><strong>Blockchain Address:</strong> {credentialData.blockchainAddress}</div>
                        </div>
                    </div>
                )}
            </div>
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
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-4"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={passwordData.confirmPassword}
                            onChange={handlePasswordChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2"
                        />
                        <button
                            onClick={handlePasswordSubmit}
                            className="mt-6 bg-blue-600 text-white w-full h-10 rounded-md font-semibold"
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
