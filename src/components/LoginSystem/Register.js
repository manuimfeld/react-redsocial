import React, { useEffect } from "react";
import registerUser from "../../helpers/registerUser";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/register.css";

const Register = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    /*Function register*/
    registerUser(name, email, password, setUser);
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
      <section className="section-register">
        <h1>Lo que está pasando ahora</h1>
        <h4>Únete a Ñuiññer hoy mismo.</h4>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="name" placeholder="Nombre de usuario" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Contraseña" />
          <button type="submit">Crear cuenta</button>
        </form>

        <h5>
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </h5>
      </section>
    </>
  );
};

export default Register;
