import React, { useEffect } from "react";
import Feed from "./Feed";
import { useNavigate } from "react-router-dom";

const Home = ({ user }) => {
  const navigate = useNavigate();

  /*Si no estás logueado, se te redirige a http://localhost:3000/register*/
  useEffect(() => {
    if (user === false) {
      navigate("/register");
    }
  }, [user]);

  return (
    <main>
      <Feed />
    </main>
  );
};

export default Home;
