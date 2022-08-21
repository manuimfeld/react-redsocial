import axios from "axios";

const registerUser = (username, email, password) => {
  const endpoint = "http://localhost:3001/api/auth/register";
  axios
    .post(endpoint, {
      username: username,
      email: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem("JWT", res.data.data.token);
    })
    .catch((err) => console.log(err));
};

export default registerUser;
