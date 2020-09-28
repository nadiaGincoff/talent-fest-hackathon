import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Favicon from 'react-favicon';

// import  Layout  from '../views/Layout';
import  Login from '../views/Login';

import { Messages } from '../views/Messages';
import { Notifications } from '../views/Notifications';
import { User } from '../views/User';
import { Exit } from '../views/Exit';

import { Activities } from '../views/Activities';
import { Important } from '../views/Important';
import { Assigned } from '../views/Assigned';
import { Scheduled } from '../views/Scheduled';
import { Week } from '../views/Week';
import { Ranking } from '../views/Ranking';
import { Resting } from '../views/Resting';
// import { Error } from './components/Error';

import BarsContainer from './BarsContainer';

const RouterApp = () => {
 
    return (
      <React.Fragment>
        {/* <Favicon url="favicon.ico"/> */}
    {/* <MainContainer /> */}
          <Router>
        
            <Switch>
            <Route path="/Login" component={Login} />
    
                <Route path='/Messages' component= {Messages} />
                <Route path='/Notifications' component= {Notifications} />
                <Route path="/User" component={User} />
                <Route path="/Exit" component={Exit} />

                <Route exact path='/' component={Activities} />
                <Route path='/Important' component={Important} />
                <Route path='/Assigned' component={Assigned} />
                <Route path='/Scheduled' component={Scheduled} />
                <Route path='/Week' component={Week} />
                <Route path='/Ranking' component={Ranking} />
                <Route path='/Resting' component={Resting} />
                <Route component={Error} />

            </Switch>
          </Router>
       
      </React.Fragment>
    );
  };

  export default RouterApp