import axios from "axios";

const registerUser = (setState) => {
  const endpoint = "http://192.168.0.71:3001/api/posts";
  const token = localStorage.getItem("JWT");
  axios.defaults.headers.common["Authorization"] = token;
  axios
    .get(endpoint)
    .then((res) => {
      setState(res.data.data);
    })
    .catch((err) => console.log(err));
};

export default registerUser;
