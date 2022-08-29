import React from "react";
import "../styles/aside.css";

const AsideNav = ({ setUser }) => {
  return (
    <section className="aside-nav">
      <ul>
        <li>Inicio</li>
        <li>Explorar</li>
        <li>Notificaciones</li>
        <li>Mensajes</li>
        <li>Guardados</li>
        <li>Perfil</li>
        <li>Más opciones</li>
        <li>
          <button
            onClick={() => {
              localStorage.removeItem("JWT");
              setUser(false);
            }}
          >
            Cerrar sesión
          </button>
        </li>
      </ul>
    </section>
  );
};

export default AsideNav;
