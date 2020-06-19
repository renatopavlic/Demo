import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import style from "./index.css";

function NavigationBar() {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" className="my-logo">Undabot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/" className="my-link">Home</Nav.Link>
            <Nav.Link href="/about" className="my-link">About Us</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
};

export default NavigationBar;
