import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import React from "react";
import logoEy from "../../Images/Ey.jpg";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="/">
            <img src={logoEy} className="logoEy" alt="logo-ey" />
          </a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <a href="/Notifications">Notificaciones</a>
            </li>
            <li>
              <a href="/Messages">Mensajes</a>
            </li>
            <li>
              <a href="/User">Usuario</a>
            </li>
            <li>
              <a href="/Login">Salir</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
