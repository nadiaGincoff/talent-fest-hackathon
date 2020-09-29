import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Messages } from './components/views/Messages';
import { Notifications } from './components/views/Notifications';
import { User } from './components/views/User';
import { Exit } from './components/views/Exit';
import { Activities } from './components/views/Activities';
import { Important } from './components/views/Important';
import { Assigned } from './components/views/Assigned';
import { Scheduled } from './components/views/Scheduled';
import { Week } from './components/views/Week';
import { Ranking } from './components/views/Ranking';
import { Resting } from './components/views/Resting';
import { Error } from './components/views/Error';

import Layout from './components/Layout/Layout';
import RoutesApp from "./Routes/RoutesApp";

function App() {
  return (
    <>
      <Router>
        <RoutesApp />
      </Router>
    </>
  );
};

export default App;