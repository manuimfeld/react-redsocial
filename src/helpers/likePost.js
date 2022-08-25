import axios from "axios";

const registerUser = (id) => {
  const endpoint = `http://localhost:3001/api/like/${id}`;
  const token = localStorage.getItem("JWT");
  axios.defaults.headers.common["Authorization"] = token;
  axios
    .post(endpoint)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export default registerUser;
