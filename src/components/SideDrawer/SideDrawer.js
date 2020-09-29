import React from "react";
import "./SideDrawer.css";
import Scheduled from '../../Images/side-drawer-logos/agendadas.png'
import Assigned from '../../Images/side-drawer-logos/apuntando-a-la-derecha 1.png'
import Ranking from '../../Images/side-drawer-logos/clasificacion 1.png'
import Week from '../../Images/side-drawer-logos/estado.png'
import Activities from '../../Images/side-drawer-logos/sol.png'
import Important from '../../Images/side-drawer-logos/star.png'
import Break from '../../Images/side-drawer-logos/break.png'

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
            <img src={Activities} alt="side drawer img" className='icon' />
            <a href="/Activities">Actividades</a>
          </li>
          <li>
            <img src={Important} alt="side drawer img" className='icon' />
            <a href="/Important">Importantes</a>
          </li>
          <li>
            <img src={Scheduled} alt="side drawer img" className='icon' />
            <a href="/Scheduled">Agendadas</a>
          </li>
          <li>
            <img src={Assigned} alt="side drawer img" className='icon' />
            <a href="/Assigned">Asignadas</a>
          </li>
          <li>
            <img src={Week} alt="side drawer img" className='icon' />
            <a href="/Week">Mi semana</a>
          </li>
          <li>
            <img src={Ranking} alt="side drawer img" className='icon' />
            <a href="/Ranking">Ranking</a>
          </li>
        </ul>
        <ul className="Resting">
          <li>
            <img src={Break} alt="side drawer img" className='icon' />
            <a href="/Resting">Descansando</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

