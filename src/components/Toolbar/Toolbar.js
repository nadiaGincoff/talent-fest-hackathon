import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import React from "react";
import logoEy from "../../Images/Ey.jpg";
import Alert from '../../Images/header-icons/Group 140.png'
import Batman from '../../Images/header-icons/Group 99.png'
import Notifications from '../../Images/header-icons/Group.png'

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
              <img src={Notifications} alt="side drawer img" className="iconSideDrawer" />
            </li>
            <li>
              <img src={Alert} alt="side drawer img" className="iconSideDrawer" />
            </li>
            <li>
              <img src={Batman} alt="side drawer img" className="iconSideDrawer" />
            </li>
            <li>
              <a href="/Login">Cerrar sesión</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
