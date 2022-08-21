import axios from "axios";

const loginUser = (email, password) => {
  const endpoint = "http://localhost:3001/api/auth/login";
  axios
    .post(endpoint, {
      email: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem("JWT", res.data.data.token);
    })
    .catch((err) => console.log(err));
};

export default loginUser;
