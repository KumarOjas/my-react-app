import React from "react";
import { useNavigate } from "react-router-dom";
import "./Loginscreen.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="create-account" onClick={() => navigate("/signup")} style={{ backgroundColor: "brightpurple", padding: "10px 15px", border: "none", borderRadius: "5px" }}>
          Create Account
        </button>
            <br></br>
        <button className="login-button" onClick={() => navigate("/login")}>Already Registered? Login</button>
      </div>
    </div>
  );
};

export default Login;
