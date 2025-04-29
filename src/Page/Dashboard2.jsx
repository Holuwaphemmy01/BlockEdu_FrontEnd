// import React, { useState } from "react";
// import Sidebar2 from "../component/Sidebar2";
// import { FiLogOut } from "react-icons/fi";
// import wine from "../assets/wine.png";
// import { IoIosNotifications } from "react-icons/io";

// const Dashboard2 = () => {
//     const [open, setOpen] = useState(false);
//     const toggleDropdown = ()=> setOpen(!open)
//     return(
//         <div className="flex flex-col md:flex-row h-screen overflow-hidden">
//       <Sidebar2 />
//       <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
//         <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 mb-6">
//           <h1 className="text-[#4CAF50] font-bold text-xl md:text-2xl">Dashboard</h1>
//           <div className="flex items-center gap-4">
//           <IoIosNotifications  size={20}/>
//                 <p  className="flex"> <FiLogOut  className="mt-1"/>Logout</p>
//           </div>
//         </div>
//         <div className="bg-[#1E88E5] p-4 rounded-md flex items-center gap-4 hover:shadow-lg transition-all h-auto">
//             <img src={wine} alt="cap" className="w-28" />
//             <div>
//                 <p className="sm:text-[30px] font-extrabold text-[20px]">Welcome  {localStorage.getItem("firstName")}!</p>
//                 <h3 >Manage your  academic credentials securely on the blockchain</h3>
//             </div>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-6">

// <div className="bg-white p-4 rounded-2xl hover:shadow-xl transition-all h-auto mt-6 flex flex-col justify-between">
//   <div>
//     <p className="font-bold">My Credentials</p>
//     <p>Bachelor of Science</p>
//     <p>University of Example</p>
//     <p>Issued on January 25, 2025</p>
//   </div>
//   <div className="flex justify-end mt-4">
//     <button className="bg-[#1E88E5] text-white w-20 h-9 rounded-md">View</button>
//   </div>
// </div>
// <div className="bg-white p-4 rounded-2xl hover:shadow-xl transition-all h-auto mt-6 flex flex-col justify-between">
//   <div>
//     <p className="font-bold">Share Credentials</p>
//     <p>Generate a secure link or QR code to share your credentials</p>
//   </div>
//   <div className="relative flex justify-end mt-4">
//       <button
//         onClick={toggleDropdown}
//         className="bg-[#4CAF50] text-white w-28 h-9 rounded-md"
//       >
//         Generate
//       </button>

//       {open && (
//         <div className="absolute mt-2 right-0 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//           <ul className="text-left">
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Generate Link</li>
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Generate QR Code</li>
//           </ul>
//         </div>
//       )}
//     </div>
// </div>

// </div>


//       </div>
//       </div>
//     )
// }
// export default Dashboard2;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import Sidebar2 from "../component/Sidebar2";
import { FiLogOut } from "react-icons/fi";
import wine from "../assets/wine.png";
import { IoIosNotifications } from "react-icons/io";

const Dashboard2 = () => {
    const [open, setOpen] = useState(false);
    const toggleDropdown = () => setOpen(!open);

    const navigate = useNavigate(); // Hook for navigation

    const handleLogout = () => {
        localStorage.clear(); // Clears all local storage data
        navigate("/Landingpage"); // Routes to the landing page
    };

    return (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
            <Sidebar2 />
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 mb-6">
                    <h1 className="text-[#4CAF50] font-bold text-xl md:text-2xl">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <IoIosNotifications size={20} />
                        {/* Add onClick handler for Logout */}
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
                            Welcome {localStorage.getItem("firstName") || Guest} {localStorage.getItem("lastName")}
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
                                onClick={toggleDropdown}
                                className="bg-[#4CAF50] text-white w-28 h-9 rounded-md"
                            >
                                Generate
                            </button>
                            {open && (
                                <div className="absolute mt-2 right-0 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                    <ul className="text-left">
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Generate Link</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Generate QR Code</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard2;