import React from 'react';
import Toolbar from './components/Toolbar';

import { Route } from "react-router-dom";

const Layout = ({path, component}) => {
  return (
    <>
    {path !== '/' ?  <Toolbar title="Toolbar" /> : null}
      <Route exact path={path} component={component}  />

    </>
  );
}

export default Layout;
