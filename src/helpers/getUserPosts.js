import axios from "axios";

const getUserPosts = async (username) => {
  try {
    const endpoint = `http://localhost:3001/api/posts/user/${username}`;
    const res = await axios.get(endpoint);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export { getUserPosts };
