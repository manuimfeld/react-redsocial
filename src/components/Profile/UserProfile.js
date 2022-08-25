import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getUserPosts from "../../helpers/getUserPosts"; //API CALL FUNCTION
import { getUserFollow, getUserFollowers } from "../../helpers/getUserFollow"; //API CALL FUNCTION
import likePost from "../../helpers/likePost";
import CreatePostSvg from "../CreatePostSvg"; // CREATE POST COMPONENT
import NavUserProfile from "./NavUserProfile"; // HEADER PROFILE COMPONENT
import InfoUserProfile from "./InfoUserProfile"; // INFO_PROFILE COMPONENT
import "../../index.css"; // STYLE.CSS
import Post from "../Post";

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
              return <Post post={post} />;
            })}
          </section>
          <CreatePostSvg openModal={() => navigate("/create/post")} />
        </>
      )}
    </>
  );
};

export default UserProfile;
