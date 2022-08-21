import React, { useEffect } from "react";
import loginUser from "../helpers/loginUser";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    /*Form data*/
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    /*Function login */
    loginUser(email, password, setUser);
  };

  useEffect(() => {
    /*Already are login, redirect to http://localhost:3000/inicio*/
    if (user === true) {
      navigate("/inicio");
    }
  }, [user]);

  return (
    <>
      <section className="section-login">
        <h1>Inicia sesión en Ñuiññer</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit">Iniciar sesión</button>
        </form>

        <h5>
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </h5>
      </section>
    </>
  );
};

export default Login;
