import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Ensure the CSS file exists

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: false, // Boolean value
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ✅ Fix: Handle Radio Buttons for "isAgency"
  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      isAgency: e.target.value === "Yes", // Converts "Yes" to true and "No" to false
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    
    // Navigate to Profile page after submission
    navigate("/profile");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create your PopX account</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
        />

        {/* ✅ Fixed Radio Buttons */}
        <div className="agency-check">
          <label>Are you an Agency?</label>
          <input
            type="radio"
            name="isAgency"
            value="Yes"
            checked={formData.isAgency === true}
            onChange={handleRadioChange}
          /> Yes
          <input
            type="radio"
            name="isAgency"
            value="No"
            checked={formData.isAgency === false}
            onChange={handleRadioChange}
          /> No
        </div>

        <button type="submit" className="create-account-btn">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
