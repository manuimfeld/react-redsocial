import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getPosts from "../helpers/getPosts";
import Header from "./Header";
import Post from "./Post";
import CreatePostSvg from "./CreatePostSvg";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //Api call GET tweets/posts
    getPosts(setPosts);
  }, []);

  return (
    <>
      <section className="section-feed">
        <Header />
        {posts.map((post) => {
          return <Post post={post} />;
        })}
      </section>

      <CreatePostSvg openModal={() => navigate("/create/post")} />
    </>
  );
};
export default Feed;
