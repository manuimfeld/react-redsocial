import React from "react";
import { useNavigate } from "react-router-dom";
import registerUser from "../helpers/registerUser";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const target = e.target;
    e.preventDefault();
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;

    /* navigate("/home"); */
    registerUser(name, email, password);
  };

  return (
    <div>
      <h1>Registrate</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="name" placeholder="username" />
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Registrar</button>
      </form>

      <h3>Ya tenés una cuenta? Inicia sesión</h3>
    </div>
  );
};

export default Register;
