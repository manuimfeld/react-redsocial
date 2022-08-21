import React, { useEffect } from "react";
import Feed from "./Feed";
import { useNavigate } from "react-router-dom";

const Home = ({ user }) => {
  const navigate = useNavigate();

  /*Already are NOT login, redirect to http://localhost:3000/register*/
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
