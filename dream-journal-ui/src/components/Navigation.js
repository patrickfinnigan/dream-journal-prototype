import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-3" >
      <Navbar.Brand href="#home">Dream Journal</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/journal">Journal</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
