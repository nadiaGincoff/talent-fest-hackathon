import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
// import Footer from './Footer';

import RouterApp from './Router';
import PropTypes from 'prop-types';


// import Content from "./Content.js";
// import { UserDataContext } from './context/UserDataContext'
  


class BarsContainer extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  };


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

// const { children} = this.props;
//   const user  = useContext(UserDataContext);

let backdrop;

if (this.state.sideDrawerOpen) {
backdrop = <Backdrop click={this.backdropClickHandler} />
}

   return (
    <div style={{height:'100%'}}>
{/*    
<Content content={ children } /> */}
<RouterApp />
     <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
   
     <SideDrawer show={this.state.sideDrawerOpen} />
     {backdrop}
     <main style={{marginTop:'64px'}}>
     
      </main>
      {/* <Footer /> */}

    </div>
  );
}
}

export default BarsContainer;
