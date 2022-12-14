import axios from "axios";
import sweetAlert from "../helpers/sweetAlert";

const loginUser = (email, password, setUser) => {
  const endpoint = "http://localhost:3001/api/auth/login";
  axios
    .post(endpoint, {
      email: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem("JWT", res.data.data.token);
      sweetAlert("Iniciaste sesión", "Iniciaste sesión", "success");
      const data = res.data.data.user;
      setUser({ ...data });
    })
    .catch((err) => {
      console.log(err);
      sweetAlert(
        "Error al iniciar sesión",
        /* "Email o contraseña invalidos", */
        JSON.stringify(err),
        "error"
      );
    });
};

export default loginUser;
