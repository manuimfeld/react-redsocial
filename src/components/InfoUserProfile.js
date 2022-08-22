import React from "react";

const InfoUserProfile = () => {
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
        <h4>manu</h4>
        <p>@manu</p>
        <p>posible descripcion</p>
        <ul>
          <li>93 seguidores</li>
          <li>31 seguidos</li>
        </ul>
      </div>
    </section>
  );
};

export default InfoUserProfile;
