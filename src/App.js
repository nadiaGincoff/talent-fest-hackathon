import React, { useContext } from 'react';
import './App.css';
import ProviderFirebase from './context/UserDataContext';
import { UserDataContext } from './context/UserDataContext'
import Login from './components/Login/Login';
import Main from './components/MainContainer';


function App() {
  const user  = useContext(UserDataContext);
  
  return (
    <ProviderFirebase>
      <div className="App">
        { user ? (
          <Main />
        ) : (
          <Login />
        )} 
      </div>
      {console.log('soy', user)}
    </ProviderFirebase>
  );
}

export default App;
