import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getPosts from "../helpers/getPosts";
import Header from "./Header";
import Post from "./Post";
import CreatePostSvg from "./CreatePostSvg";

const Feed = ({ user }) => {
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
        {posts.map((post, index) => {
          return (
            <Post
              post={post}
              index={index}
              user={user}
              posts={posts}
              setPosts={setPosts}
            />
          );
        })}
      </section>

      <CreatePostSvg openModal={() => navigate("/create/post")} />
    </>
  );
};
export default Feed;
