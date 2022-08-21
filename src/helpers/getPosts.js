import axios from "axios";

const registerUser = (setState) => {
  const endpoint = "http://localhost:3001/api/posts";
  axios
    .get(endpoint, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("JWT"),
      },
    })
    .then((res) => {
      setState(res.data.data);
    })
    .catch((err) => console.log(err));
};

export default registerUser;
