import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProviderFirebase from './context/UserDataContext';

ReactDOM.render(
  <React.StrictMode>
    {/* <ProviderFirebase> */}
      <App />
    {/* </ProviderFirebase> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
