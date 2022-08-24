import axios from "axios";

const getUserFollow = (id, setState) => {
  const endpoint = `http://localhost:3001/api/followers/${id}`;
  const token = localStorage.getItem("JWT");
  axios.defaults.headers.common["Authorization"] = token;
  axios
    .get(endpoint)
    .then((res) => {
      setState(res.data.data);
    })
    .catch((err) => console.log(err));
};

const getUserFollowers = (id, setState) => {
  const endpoint = `http://localhost:3001/api/follow/${id}`;
  const token = localStorage.getItem("JWT");
  axios.defaults.headers.common["Authorization"] = token;
  axios
    .get(endpoint)
    .then((res) => {
      setState(res.data.data);
    })
    .catch((err) => console.log(err));
};

export { getUserFollow, getUserFollowers };
