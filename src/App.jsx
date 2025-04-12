import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Landingpage from "./Page/Landingpage";
import Login from "./component/Login"

const App = ()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </Router>

  )
}
export default App;