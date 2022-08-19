import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    const target = e.target;
    e.preventDefault();
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;

    console.log(name, email, password);
  };

  return (
    <div>
      <h1>Registrate</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Registrar</button>
      </form>

      <h3>Ya tenés una cuenta? Inicia sesión</h3>
    </div>
  );
};

export default Login;
