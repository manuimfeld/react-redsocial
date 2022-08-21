import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../components/Register";
import Home from "../components/Home";
import Login from "../components/Login";

const PrincipalRouter = ({ user, setUser }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={<Register user={user} setUser={setUser} />}
        />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route
          path="/inicio"
          element={<Home user={user} setUser={setUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default PrincipalRouter;
