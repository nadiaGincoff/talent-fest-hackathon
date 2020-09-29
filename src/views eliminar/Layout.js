// import React from 'react';
// import { Container } from 'react-bootstrap';

// export const Layout = (props) => (
// <Container>   
// {props.children}
// </Container> 
// );


// import React from 'react';
// import { Route } from "react-router-dom";

// import Toolbar from '../components/Toolbar/Toolbar';


// const Layout = ({path, component}) => {
//   return (
//     <>
//     {path !== '/' ? <Toolbar title="Login" /> : null}

//       <Route exact path={path} component={component}  />
//     </>

//   );
// }

// export default Layout;


// import React from 'react';
// import Header from '../Global/Header';

// import { Route } from "react-router-dom";

// const Layout = ({path, component}) => {
//   return (
//     <>
//     {path !== '/' ?  <Header title="Inicio" /> : null}
//       <Route exact path={path} component={component}  />

//     </>
//   );
// }

// export default Layout;



import React from 'react';
import BarsContainer from '../components/BarsContainer';
// import { Container } from 'react-bootstrap';

export const Layout = (props) => (
<BarsContainer>   
{props.children}
</BarsContainer> 
);

export default Layout;