import React, { useEffect } from "react";
import Feed from "./Feed";
import { useNavigate } from "react-router-dom";

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
    <main>
      <Feed />
    </main>
  );
};

export default Home;
