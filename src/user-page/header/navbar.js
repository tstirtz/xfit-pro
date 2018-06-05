import React from 'react';
import { Navbar, NavDropdown, MenuItem, NavItem, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function HeaderNav() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#"><Link to="/about">About</Link></NavItem>
        <NavItem eventKey={2} href="#">
          Pictures
        </NavItem>
        <NavItem eventKey={2} href="#">
          Gym
        </NavItem>
      </Nav>
    </Navbar>
  );
}
