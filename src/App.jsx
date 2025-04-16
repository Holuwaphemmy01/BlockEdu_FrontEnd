import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Landingpage from "./Page/Landingpage";
import Login from "./component/Login"
import Signup from "./component/Signup"
import Credentials from "./component/Credentials";
import Sidebar from "./component/Sidebar"
import Dashboard1 from "./Page/Dashboard1";

const App = ()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/credentials" element={<Credentials/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/dashboard1" element={<Dashboard1/>}/>

      </Routes>

    </Router>

  )
}
export default App;