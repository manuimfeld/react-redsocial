import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Registrate</h1>
      <form>
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
