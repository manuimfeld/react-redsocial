import React from "react";
import { useNavigate } from "react-router-dom";
import createPost from "../helpers/createPost";

const ModalCreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const content = target.content.value;

    // Api call POST, al crear un post se te redirige a http://localhost:3001/inicio
    createPost(content, navigate);
  };

  return (
    <section className="section-createpost">
      <button onClick={() => navigate(-1)}>Volver</button>
      <div className="post-content">
        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <textarea placeholder="¿Qué está pasando?" name="content"></textarea>
          <button className="createpost-button-submit" type="submit">
            Publicar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ModalCreatePost;
