import axios from "axios";
import sweetAlert from "../helpers/sweetAlert";

const registerUser = (username, email, password, setUser) => {
  const endpoint = "http://localhost:3001/api/auth/register";
  axios
    .post(endpoint, {
      username: username,
      email: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem("JWT", res.data.data.token);
      sweetAlert(
        "Registro completo",
        "Registraste tu cuenta correctamente",
        "success"
      );
      setUser(true);
    })
    .catch((err) => console.log(err));
};

export default registerUser;
