import React, { useEffect, useState } from "react";
import Header from "./Header";
import getPosts from "../helpers/getPosts";
import CreatePostSvg from "./CreatePostSvg";
import { useNavigate } from "react-router-dom";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //Api call GET tweets/posts
    getPosts(setPosts);
  }, []);

  return (
    <>
      <Header />

      <section className="section-feed">
        {posts.map((post) => {
          return <Post post={post} />;
        })}
      </section>

      <CreatePostSvg openModal={() => navigate("/create/post")} />
    </>
  );
};
export default Feed;
