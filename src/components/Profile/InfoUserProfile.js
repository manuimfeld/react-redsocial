import React from "react";

const InfoUserProfile = ({ username, userFollowers, userFollows }) => {
  return (
    <section className="section-info-userprofile">
      <img
        src="https://pbs.twimg.com/profile_images/1538383694397952000/JbMqW-SS_400x400.jpg"
        alt=""
        className="bg-image-profile"
      />
      <img
        src="https://pbs.twimg.com/profile_images/1538383694397952000/JbMqW-SS_400x400.jpg"
        alt=""
        className="main-image-profile"
      />
      <div className="info-profile">
        <h4>{username}</h4>
        <p>@{username}</p>
        <ul>
          <li>{userFollowers.length} seguidores</li>
          <li>{userFollows.length} seguidos</li>
        </ul>
      </div>
    </section>
  );
};

export default InfoUserProfile;
