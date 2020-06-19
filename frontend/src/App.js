import React from 'react';

import {Container} from "react-bootstrap";

import NavigationBar from "./components/navigationBar"
import HomeMain from "./components/homeMain"

function App() {
  return (
    <div className="App">
      <NavigationBar/>

      <Container>
      <HomeMain/>
      </Container>
    </div>
  );
}

export default App;
