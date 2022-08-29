import React, { useEffect } from "react";
import loginUser from "../../helpers/loginUser";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/register.css";

const Login = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.username.value;
    const password = target.password.value;
    // Api call POST login
    loginUser(email, password, setUser);
  };

  useEffect(() => {
    if (user === true) {
      // Si estás logueado, se te redirige a http://localhost:3000/inicio
      navigate("/inicio");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <section className="section-login">
        <h1>Inicia sesión en Ñuiññer</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="username" placeholder="email" />
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
