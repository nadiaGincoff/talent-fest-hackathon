import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import Favicon from 'react-favicon';

import {Layout} from '../components/Layout/Layout';
import LayoutLogin from '../components/Layout/LayoutLogin';
import { Messages } from '../components/views/Messages';
import { Notifications } from '../components/views/Notifications';
import { User } from '../components/views/User';
import { Exit } from '../components/views/Exit';
import { Activities } from '../components/views/Activities';
import { Important } from '../components/views/Important';
import { Assigned } from '../components/views/Assigned';
import { Scheduled } from '../components/views/Scheduled';
import { Week } from '../components/views/Week';
import { Ranking } from '../components/views/Ranking';
import { Resting } from '../components/views/Resting';
import { Error } from '../components/views/Error';
import { LoginView } from '../components/views/LoginView';


const Routes = () => {
      return (
            <Switch>
                  <Layout exact path='/' component={Activities} />
                  <LayoutLogin exact path='/Login' component={LoginView} />
                  <Layout exact path='/Activities' component={Activities} />
                  <Layout exact path='/Messages' component={Messages} />
                  <Layout exact path='/Notifications' component={Notifications} />
                  <Layout exact path="/User" component={User} />
                  <Layout exact path="/Exit" component={Exit} />
                  <Layout exact path='/Important' component={Important} />
                  <Layout exact path='/Assigned' component={Assigned} />
                  <Layout exact path='/Scheduled' component={Scheduled} />
                  <Layout exact path='/Week' component={Week} />
                  <Layout exact path='/Ranking' component={Ranking} />
                  <Layout exact path='/Resting' component={Resting} />
                  <Layout component={Error} />
            </Switch>
      );
};

export default Routes