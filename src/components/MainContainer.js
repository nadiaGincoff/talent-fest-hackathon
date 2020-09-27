import React, { Fragment, useContext } from 'react';
import { UserDataContext } from '../context/UserDataContext'

const Main = () => {
    const { handleLogout } = useContext(UserDataContext);
    return (    
        <Fragment>
            <h2>WELCOME BRO</h2>
            <button onClick={handleLogout}>
                Logout
            </button>
        </Fragment>
    );
}
 
export default Main;