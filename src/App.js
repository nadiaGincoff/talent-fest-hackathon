import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Messages } from './views/Messages';
import { Notifications } from './views/Notifications';
import { User } from './views/User';
import { Exit } from './views/Exit';
import { Activities } from './views/Activities';
import { Important } from './views/Important';
import { Assigned } from './views/Assigned';
import { Scheduled } from './views/Scheduled';
import { Week } from './views/Week';
import { Ranking } from './views/Ranking';
import { Resting } from './views/Resting';
import MainContainer from "./components/MainContainer";

function App () {
  return (
    <Fragment>
    <MainContainer></MainContainer>
    <Router>
      <Switch>
        <Route path='/' exact component={MainContainer} />
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
        <Route component={Error} />
      </Switch>
    </Router>
    </Fragment>

  );
};

export default App;