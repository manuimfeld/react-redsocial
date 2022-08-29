import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreatePostSvg from "../CreatePostSvg"; // CREATE POST COMPONENT
import NavUserProfile from "./NavUserProfile"; // HEADER PROFILE COMPONENT
import InfoUserProfile from "./InfoUserProfile"; // INFO_PROFILE COMPONENT
import Post from "../Post"; // POST COMPONENT
import "../../index.css"; // STYLE.CSS
import { getUserFollow, getUserFollowers } from "../../helpers/getUserFollow";
import { getUserPosts } from "../../helpers/getUserPosts";

const UserProfile = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // GET QUERY URL (username)
    const query = new URLSearchParams(window.location.search);
    const username = query.get("user");

    const getUserData = async () => {
      const userFollow = await getUserFollow(username);
      const userFollowers = await getUserFollowers(username);
      const userPosts = await getUserPosts(username);
      try {
        setUserData({
          follow: userFollow,
          followers: userFollowers,
          posts: userPosts,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getUserData(username);
  }, [userData]);

  return (
    <>
      {userData.posts === undefined ? (
        <h4>No ha publicado nada recientemente.</h4>
      ) : (
        <>
          <NavUserProfile
            userPostsLength={userData.posts.length}
            username={userData.posts[0].postedByUser}
          />
          <InfoUserProfile
            userPost={userData.posts[0].postedByUser}
            userFollowers={userData.followers.length}
            userFollow={userData.follow.length}
          />
          <section className="section-feed">
            {userData.posts.map((post) => {
              return <Post post={post} key={post._id} />;
            })}
          </section>
          <CreatePostSvg openModal={() => navigate("/create/post")} />
        </>
      )}
    </>
  );
};

export default UserProfile;
