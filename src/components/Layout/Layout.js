
import React, { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import { SideDrawer } from '../SideDrawer/SideDrawer';
import { Backdrop } from '../Backdrop/Backdrop';
import { Footer } from '../Footer/Footer';
import { Route } from 'react-router-dom';

export const Layout = ({ component, path, exact }) => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    let backdrop;
    if (sideDrawerOpen) {
        backdrop = <Backdrop click={() => setSideDrawerOpen(false)} />
    }
    return (
        <div style={{ height: '100%' }}>
            <Toolbar drawerClickHandler={() => setSideDrawerOpen(true)} />
            <SideDrawer show={sideDrawerOpen} />
            { backdrop}
            <Route exact={exact} path={path} component={component} />
            <Footer />
        </div>
    );
}

