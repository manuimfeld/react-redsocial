import axios from "axios";

const getUserFollow = async (username) => {
  try {
    const endpoint = `http://localhost:3001/api/followers/${username}`;
    const token = localStorage.getItem("JWT");
    axios.defaults.headers.common["Authorization"] = token;
    const res = await axios.get(endpoint);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

const getUserFollowers = async (username) => {
  try {
    const endpoint = `http://localhost:3001/api/follow/${username}`;
    const token = localStorage.getItem("JWT");
    axios.defaults.headers.common["Authorization"] = token;
    const res = await axios.get(endpoint);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export { getUserFollow, getUserFollowers };
