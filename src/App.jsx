import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Landingpage from "./Page/Landingpage";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Credentials from "./component/Credentials";
import Sidebar from "./component/Sidebar";
import Dashboard1 from "./Page/Dashboard1";
import Dashboard2 from "./Page/Dashboard2";
import Loader from "./component/Loader";
import About from "./component/About";
import Contact from "./component/Contact";
import Logos from "./component/Logos";
import Linkpage from "./Page/Linkpage";
import Sidebar2 from "./component/Sidebar2";

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/dashboard1" element={<Dashboard1 />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logo" element={<Logos />} />
        <Route path="/sidebar2" element={<Sidebar2 />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/auth/:id" element={<Linkpage />} />
      </Routes>
    </Router>
  );
}

export default App;
