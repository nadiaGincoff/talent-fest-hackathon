import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { Footer } from './components/Footer';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Router from './components/Router';


class App extends Component {
  state = {
    sideDrawerOpen:false
      };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
  return {sideDrawerOpen: !prevState.sideDrawOpen};
});
};

backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false});
};


render() {

let backdrop;

if (this.state.sideDrawerOpen) {
backdrop = <Backdrop click={this.backdropClickHandler} />
}

   return (
      <div style={{height:'100%'}}>
     <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
     <Router />
     <SideDrawer show={this.state.sideDrawerOpen} />
     {backdrop}
     <main style={{marginTop:'64px'}}>
     
      </main>
      <Footer />

    </div>
  );
}
}

export default App;
