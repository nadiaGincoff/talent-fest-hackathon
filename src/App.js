import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
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