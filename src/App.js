import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Loginscreen from "./Loginscreen"; // Import Loginscreen component
import Profile from "./Profile"; // Import Profile component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Loginscreen />} /> {/* Route for Loginscreen */}
        {/* Route for Profile */}
        <Route path="/profile" element={<Profile />} /> {/* Route for Profile */}
      </Routes>
    </Router>
  );
};

export default App;
