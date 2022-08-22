import React, { useEffect, useState } from "react";
import getUserPosts from "../helpers/getUserPosts";
import Header from "./Header";
import CreatePostSvg from "../img/CreatePostSvg";
import { useNavigate } from "react-router-dom";
import "../index.css";
import NavUserProfile from "./NavUserProfile";
import InfoUserProfile from "./InfoUserProfile";

const UserProfile = () => {
  const [userPosts, setUserPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const username = query.get("user");

    getUserPosts(username, setUserPosts);
  }, []);

  return (
    <>
      {userPosts.length === 0 ? (
        <h2>asd</h2>
      ) : (
        <>
          <NavUserProfile
            postsLength={userPosts.length}
            username={userPosts[0].postedByUser}
          />
          <InfoUserProfile />
          <section className="section-feed">
            {userPosts.map((post) => {
              return (
                <article className="post" key={post._id}>
                  <img
                    src="https://www.w3schools.com/howto/img_avatar2.png"
                    alt=""
                    className="user-logo-post"
                  />
                  <div className="post-content">
                    <p className="username-post">
                      <strong>{post.postedByUser}</strong>
                    </p>
                    <p>{post.content}</p>
                    <ul className="button-post">
                      <li>
                        <img src={require("../img/like-icon.png")} alt="" />
                        <span>Me gusta</span>
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
      )}
    </>
  );
};

export default UserProfile;
