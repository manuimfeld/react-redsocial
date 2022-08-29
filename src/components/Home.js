import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AsideBrowser from "./AsideBrowser";
import AsideNav from "./AsideNav";
import Feed from "./Feed";

const Home = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user === false) {
      //Si no estás logueado, se te redirige a http://localhost:3000/register
      navigate("/register");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <AsideNav />
      <Feed />
      <AsideBrowser />
    </>
  );
};

export default Home;
