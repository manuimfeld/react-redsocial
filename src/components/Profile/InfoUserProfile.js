import React from "react";

const InfoUserProfile = ({ userPost, userFollowers, userFollow }) => {
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
        <h4>{userPost}</h4>
        <p>@{userPost}</p>
        <ul>
          <li>{userFollowers} seguidores</li>
          <li>{userFollow} seguidos</li>
        </ul>
      </div>
    </section>
  );
};

export default InfoUserProfile;
