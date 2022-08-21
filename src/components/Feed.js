import React, { useEffect, useState } from "react";
import getPosts from "../helpers/getPosts";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  return (
    <>
      <div className="nav-feed"></div>
      <section className="feed">
        {!localStorage.getItem("JWT") ? (
          <h1>No existe pa</h1>
        ) : (
          posts.map((post) => {
            return (
              <article className="post" key={post._id}>
                <img
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  alt=""
                />
                <div className="post-content">
                  <p>
                    <strong>{post.postedByUser}</strong>
                  </p>
                  <p>{post.content}</p>
                </div>
              </article>
            );
          })
        )}
      </section>
    </>
  );
};
export default Feed;
