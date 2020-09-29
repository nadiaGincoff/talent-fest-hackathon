import React from 'react';
import { Route } from 'react-router-dom';
// import  Login  from '../Login/Login';

// import MainContainer from '../MainContainer';


const LayoutLogin = ({path, exact, component}) => {
  return (

    <>
      <Route exact={exact} path={path} component={component}  />
    </>
  );
}

export default LayoutLogin;
