import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../components/LoginSystem/Register";
import Login from "../components/LoginSystem/Login";
import Home from "../components/Home";
import ModalCreatePost from "../components/ModalCreatePost";
import UserProfile from "../components/Profile/UserProfile";

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
        <Route
          path="/inicio"
          element={<Home user={user} setUser={setUser} />}
        />
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/create/post" element={<ModalCreatePost />} />
        <Route path="/profile/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PrincipalRouter;
