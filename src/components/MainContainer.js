import React, { useState } from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import Footer from './Footer';

const MainContainer = () => {
    const [ sideDrawerOpen, setSideDrawerOpen ] = useState(false);

    let backdrop;
    if (sideDrawerOpen) {
        backdrop = <Backdrop click={() => setSideDrawerOpen(false)} />
    }

    return ( 
        <div style={{height:'100%'}}>
            <Toolbar drawerClickHandler={() => setSideDrawerOpen(true)} />
            <SideDrawer show={sideDrawerOpen} />
            { backdrop }
            <main style={{marginTop:'64px'}} />
            <Footer />
        </div>
    );
}
 
export default MainContainer;