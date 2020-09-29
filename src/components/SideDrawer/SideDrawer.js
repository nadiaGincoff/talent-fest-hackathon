import React from "react";
import "./SideDrawer.css";

export const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer, open";
  }

  return (
    <div className="main-container">
      <nav className={drawerClasses}>
        <ul>
           
          <li>
            <a href="/Activities">Actividades</a>
          </li>
          <li>
            <a href="/Important">Importantes</a>
          </li>
          <li>
            <a href="/Scheduled">Agendadas</a>
          </li>
          <li>
            <a href="/Assigned">Asignadas</a>
          </li>
          <li>
            <a href="/Week">Mi semana</a>
          </li>
          <li>
            <a href="/Ranking">Ranking</a>
          </li>
        </ul>
        <ul className="Resting">
          <li>
            <a href="/Resting">Descansando</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

