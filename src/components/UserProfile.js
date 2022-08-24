import React, { useEffect, useState } from "react";
import getUserPosts from "../helpers/getUserPosts";
import CreatePostSvg from "../img/CreatePostSvg";
import { useNavigate } from "react-router-dom";
import "../index.css";
import NavUserProfile from "./NavUserProfile";
import InfoUserProfile from "./InfoUserProfile";
import { getUserFollow, getUserFollowers } from "../helpers/getUserFollow";

const UserProfile = () => {
  const [userPosts, setUserPosts] = useState([]); // Posts del usuario
  const [userFollows, setUserFollows] = useState([]); // Cuentas que el usuario sigue
  const [userFollowers, setUserFollowers] = useState([]); // Cuentas que siguen al usuario
  const navigate = useNavigate();

  useEffect(() => {
    // GET QUERY URL (username)
    const query = new URLSearchParams(window.location.search);
    const username = query.get("user");

    getUserPosts(username, setUserPosts); //API CALL GET POSTS
    getUserFollow(username, setUserFollows); //API CALL GET USER FOLLOW
    getUserFollowers(username, setUserFollowers); //API CALL GET USER FOLLOWERS
  }, []);

  return (
    <>
      {userPosts.length === 0 ? (
        <h4>No ha publicado nada recientemente.</h4>
      ) : (
        <>
          <NavUserProfile
            postsLength={userPosts.length}
            username={userPosts[0].postedByUser}
          />
          <InfoUserProfile
            username={userPosts[0].postedByUser}
            userFollows={userFollows}
            userFollowers={userFollowers}
          />
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
