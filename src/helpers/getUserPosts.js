import axios from "axios";

const getUserPosts = (username, setState) => {
  const endpoint = `http://localhost:3001/api/posts/user/${username}`;
  axios
    .get(endpoint)
    .then((res) => {
      setState(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getUserPosts;
