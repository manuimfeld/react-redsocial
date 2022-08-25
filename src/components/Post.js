import React from "react";
import { Link } from "react-router-dom";
import likePost from "../helpers/likePost";

const Post = ({ post }) => {
  return (
    <article className="post" key={post._id}>
      <Link to={`/profile/${post.postedByUser}?user=${post.postedByUser}`}>
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
};

export default Post;
