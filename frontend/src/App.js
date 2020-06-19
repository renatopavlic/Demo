import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/about" exact component={AboutPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
