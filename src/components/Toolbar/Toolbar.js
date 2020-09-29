import React from 'react';
import DrawerToggleButton from'../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

// import logo from '../Images/EY_Logo.png';

const Toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar__navigation'>
        <div className='toolbar__toggle-button'>
           <DrawerToggleButton click={props.drawerClickHandler} />
           </div> 

<div className='toolbar__logo'>
<a href='/'>EY</a>
</div>

{/* <a href='/'><img src={logo} alt="Logo EY" width='100px'/></a> */}


<div className='spacer' />
<div className='toolbar_navigation-items'>
 <ul>

 <li><a href='/Login'>Entrar</a></li>
    <li><a href='/Notifications'>Notificaciones</a></li>
    <li><a href='/Messages'>Mensajes</a></li>
    <li><a href='/User'>Usuario</a></li>
    <li><a href='/Exit'>Salir</a></li>
 </ul>
    </div>  
        </nav>
    </header>
);

export default Toolbar;

