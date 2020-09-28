
import React  from 'react';
import { BrowserRouter as Route } from 'react-router-dom';

import  Toolbar from '../Toolbar/Toolbar';


 const Login =  ({path, component}) => {
     return (

        // const [ sideDrawerOpen, setSideDrawerOpen ] = useState(false);

        // let backdrop;
        // if (sideDrawerOpen) {
        //     backdrop = <Backdrop click={() => setSideDrawerOpen(false)} />
        // }


<div className='login'>

    <div className='form'>

    <h1>Iniciar sesión</h1>

    {path === '/Login' ?  <Toolbar  /> : null}
       <Route exact path={path} component={component}  />

</div>
</div>

     );
     }

     export default Login;

