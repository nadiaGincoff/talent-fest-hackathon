import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import MainContainer from "./components/MainContainer";

import Login from "./components/views/Login";

function App () {
  return (
    <Fragment>
   <MainContainer></MainContainer>
    <Router>
      <Switch>
     
        <Route path='/' exact component={MainContainer} />

        <Route path='/' exact component={Login} />

        <Route path='/Messages' component= {Messages} />
        <Route path='/Notifications' component= {Notifications} />
        <Route path="/User" component={User} />
        <Route path="/Exit" component={Exit} />
        <Route path='/Activities' component={Activities} />
        <Route path='/Important' component={Important} />
        <Route path='/Assigned' component={Assigned} />
        <Route path='/Scheduled' component={Scheduled} />
        <Route path='/Week' component={Week} />
        <Route path='/Ranking' component={Ranking} />
        <Route path='/Resting' component={Resting} />
        {/* <Route component={Error} /> */}

      </Switch>
    </Router>
    </Fragment>

  );
};

export default App;