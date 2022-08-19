import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";

const PrincipalRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PrincipalRouter;
