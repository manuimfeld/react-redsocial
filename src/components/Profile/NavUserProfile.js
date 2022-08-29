import React from "react";
import { useNavigate } from "react-router-dom";

const NavUserProfile = ({ userPostsLength, username }) => {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="nav-feed">
        <img
          src={require("../../img/back-arrow.png")}
          alt=""
          className="profile-nav-logo"
          onClick={() => navigate(-1)}
        />
        <div className="profile-data">
          <h4>{username}</h4>
          <p>{userPostsLength} publicaciones</p>
        </div>
      </nav>
    </header>
  );
};

export default NavUserProfile;
