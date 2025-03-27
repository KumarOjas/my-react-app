import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Loginscreen from "./Loginscreen"; 
import Profile from "./Profile"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Loginscreen />} /> {/* Route for Loginscreen */}
        
        <Route path="/profile" element={<Profile />} /> {/* Route for Profile */}
      </Routes>
    </Router>
  );
};

export default App;
