import React from "react";
import { Link } from "react-router-dom";
import likePost from "../helpers/likePost";

const Post = ({ post, index, user, posts, setPosts }) => {
  const handleLike = (username) => {
    let newPosts = [...posts];
    if (newPosts[index].usersLiked.includes(username)) {
      // Si el usuario ya le dio like, le quita el mismo
      newPosts[index].likes -= 1;
      newPosts[index].usersLiked.pop(username);
      setPosts([...newPosts]);
    } else {
      // Si el usuario no le dio like, se lo agrega
      newPosts[index].likes += 1;
      newPosts[index].usersLiked.push(username);
      setPosts([...newPosts]);
    }
  };

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
            <span
              onClick={() => {
                handleLike(user.username);
                likePost(post._id);
              }}
            >
              {post.usersLiked.includes(user.username) ? "❤️" : "🖤"}
            </span>
            <span>{post.likes} me gusta</span>
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
