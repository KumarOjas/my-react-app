import React from "react";
import "./Profile.css"; // Ensure you have this CSS file

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h3>Account Settings</h3>
        <div className="profile-info">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <div>
            <h4>Marry Doe</h4>
            <p className="email">Marry@gmail.com</p>
          </div>
        </div>
        <p className="bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat.
        </p>
      </div>
    </div>
  );
};

export default Profile;
