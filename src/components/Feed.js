import React, { useEffect, useState } from "react";
import Header from "./Header";
import getPosts from "../helpers/getPosts";
import likePost from "../helpers/likePost";
import CreatePostSvg from "./CreatePostSvg";
import { Link, useNavigate } from "react-router-dom";

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
          return (
            <article className="post" key={post._id}>
              <Link
                to={`/profile/${post.postedByUser}?user=${post.postedByUser}`}
              >
                <img
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  alt=""
                  className="user-logo-post"
                />
              </Link>
              <div className="post-content">
                <p className="username-post">
                  <strong>{post.postedByUser}</strong>
                </p>
                <p>{post.content}</p>
                <ul className="button-post">
                  <li>
                    <img src={require("../img/like-icon.png")} alt="" />
                    <span onClick={() => likePost(post._id)}>
                      {post.likes} me gusta
                    </span>
                  </li>
                  <li>
                    <img src={require("../img/comment-icon.png")} alt="" />
                    <span>Comentar</span>
                  </li>
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      <CreatePostSvg openModal={() => navigate("/create/post")} />
    </>
  );
};
export default Feed;
