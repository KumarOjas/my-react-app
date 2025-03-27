import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginscreen.css"; // Ensure you have this CSS file

const Loginscreen = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data Submitted:", formData);
    
    // Navigate to Profile page after successful login
    navigate("/profile");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign in to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Loginscreen; // Ensure the component name matches the export
