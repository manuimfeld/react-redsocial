import React from "react";
import "../styles/aside.css";

const AsideNav = () => {
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
          <button>Cerrar sesión</button>
        </li>
      </ul>
    </section>
  );
};

export default AsideNav;
