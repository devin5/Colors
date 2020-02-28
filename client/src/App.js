import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import BubblesPage from './components/BubblePage'

import Login from "./components/Login";
import "./styles.scss";



function App() {



  
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
        <Login/>
        </Route>
        <PrivateRoute
        path="/bubbles"
        component={BubblesPage}
      />
      </div>
    </Router>
  );
}

export default App;
