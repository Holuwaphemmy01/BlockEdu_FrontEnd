// import React from "react";
// import logo from "../assets/logo.png";
// import { IoShieldCheckmarkSharp } from "react-icons/io5";

// const Linkpage = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       <div className="text-center mt-8">
//         <img src={logo} alt="blockedu" className="w-[150px] h-auto mx-auto" />
//       </div>

//       <div className="flex-grow items-center justify-center px-4 text-center mt-5">
//         <div>
//           <h1 className="text-2xl font-semibold mb-2">Welcome to BlockEdu</h1>
//           <p className="text-gray-600">
//             Your credentials are secure and verified through blockchain technology.
//             {/* <br />
//             Please follow the next steps to proceed. */}
//           </p>
//         </div>
//       </div>
//       <footer className="text-center py-4 border-t">
//         <p>
//           &copy; {new Date().getFullYear()} BlockEdu. All rights reserved. | Secured with Blockchain
//           <span className="text-blue-500 ml-2 inline-block align-middle">
//             <IoShieldCheckmarkSharp />
//           </span>
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Linkpage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from "axios";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const Linkpage = () => {
  const { id } = useParams();
  const [credentialData, setCredentialData] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCredential = async () => {
      try {
        console.log("This is the id"+id);
        const response = await axios.get(`http://localhost:8000/auth/${id}`, {
          responseType: 'json'
        });

        // Convert PDF content from base64
        const byteCharacters = atob(response.data.content);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        const blobUrl = URL.createObjectURL(blob);
        setFileUrl(blobUrl);

        setCredentialData({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          institutionName: response.data.institutionName,
          institutionMotto: response.data.institutionMotto,
          blockChainAddress: response.data.blockChainAddress,
          credentialsDate: new Date(response.data.credentialsDate).toLocaleDateString()
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching credential:", error);
        setError("Failed to load credential");
        setLoading(false);
      }
    };

    if (id) {
      fetchCredential();
    }
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="text-center mt-8">
        <img src={logo} alt="blockedu" className="w-[150px] h-auto mx-auto" />
      </div>

      <div className="flex-grow flex items-center justify-center px-4">
        {loading ? (
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="w-full max-w-4xl">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">
                {credentialData.firstName} {credentialData.lastName}'s Credentials
              </h2>
              
              {fileUrl && (
                <div className="mb-6">
                  <object
                    data={fileUrl}
                    type="application/pdf"
                    className="w-full h-[60vh] rounded-md"
                  >
                    <p>Your browser does not support PDFs. Please download the PDF to view it.</p>
                  </object>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><strong>Institution:</strong> {credentialData.institutionName}</div>
                <div><strong>Motto:</strong> {credentialData.institutionMotto}</div>
                <div><strong>Issue Date:</strong> {credentialData.credentialsDate}</div>
                <div><strong>Blockchain Address:</strong> {credentialData.blockChainAddress}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="text-center py-4 border-t mt-8">
        <p>
          &copy; {new Date().getFullYear()} BlockEdu. All rights reserved. | Secured with Blockchain
          <span className="text-blue-500 ml-2 inline-block align-middle">
            <IoShieldCheckmarkSharp />
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Linkpage;

