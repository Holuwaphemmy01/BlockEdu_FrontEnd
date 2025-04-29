import React, { useState, useEffect } from "react";
import Sidebar from "../component/Sidebar";
import { FaUserAlt } from "react-icons/fa";
import { MdNoteAdd, MdVerifiedUser } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Dashboard1 = () => {
  const [students, setStudents] = useState([]);
  const location = useLocation();
  const [formData, setFormData] = useState({});
  const [studentCount, setStudentCount] = useState(0);
  const [totalCredentials, setTotalCredentials] = useState(0);
  const [verifiedCredentials, setVerifiedCredentials] = useState(0);
  
  useEffect(() => {
    const storedUserDetails = localStorage.getItem("userDetails");
    if (storedUserDetails) {
      setFormData(JSON.parse(storedUserDetails));
    } else if (location.state) {
      setFormData(location.state);
    }
  }, [location.state]);
 
  useEffect(() => {
  
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedStudents);
  }, []);
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  
  

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-[#4CAF50] font-bold text-xl md:text-2xl">Dashboard</h1>
          <div>
            <p><strong>Email:</strong> {localStorage.getItem("officialMail") || "Not Available"}</p>
            <p><strong>Institution Name:</strong> {localStorage.getItem("institutionName")|| "Not Available"}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { title: "Total Students", value: 1250, icon: <FaUserAlt /> },
            { title: "Total Credentials", value: 3400, icon: <MdNoteAdd /> },
            { title: "Verified Credentials", value: 2950, icon: <MdVerifiedUser /> }
          ].map((card, index) => (
            <div key={index} className="bg-[#B9CAD5] p-4 rounded-md flex items-center gap-4 hover:shadow-lg transition-all">
              {card.icon}
              <div>
                <p className="text-sm font-semibold">{card.title}</p>
                <p className="text-lg font-bold">{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-[#4CAF50] font-semibold mb-4">Recent Credentials</h2>
        <div className="w-full overflow-x-auto border border-gray-300 rounded-lg shadow-md">
          <div className="min-w-[700px] space-y-2">
            <div className="grid grid-cols-4 gap-6 bg-gray-100 p-4 rounded-t-lg font-semibold text-lg">
              <div>Student Name</div>
              <div>Credentials</div>
              <div>Issued</div>
              <div>Status</div>
            </div>
            {students.map((student, index) => (
  <div
    key={index}
    className="grid grid-cols-4 gap-6 bg-white p-4 rounded-lg shadow-md items-center"
  >
    <div>{student.studentName || student.matricId}</div>
    <div>{student.credentials?.join(", ") || "None"}</div>
    <div>
      {student.dateIssued
        ? new Date(student.dateIssued).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "N/A"}
    </div>
    <div>
      <span className="bg-[#C4E0AD] text-center py-1 px-2 rounded-lg block w-fit mx-auto">
        {student.status || "Pending"}
      </span>
    </div>
  </div>
))}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
