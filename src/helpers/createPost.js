import axios from "axios";

const createPost = (content, navigate) => {
  const endpoint = "http://192.168.0.71:3001/api/posts";
  const token = localStorage.getItem("JWT");
  axios.defaults.headers.common["Authorization"] = token;
  axios
    .post(endpoint, { content: content, postedByUser: "react-app" })
    .then((res) => {
      navigate("/inicio");
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export default createPost;
