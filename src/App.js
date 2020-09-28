import React, { Fragment, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserDataContext } from './context/UserDataContext'
import Login from './components/Login/Login';
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

function App () {
  const hasAccount = useContext(UserDataContext);

  return (
    <Fragment>
          <Router>
            <Switch>
            {/* { hasAccount ? (<MainContainer></MainContainer>) : (<Login></Login>) }
              <Route path='/' exact component={MainContainer} /> */}
              <Route path='/' exact component={MainContainer} />
              <Route path='/Login' component={Login} />
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
