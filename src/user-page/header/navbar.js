import React from 'react';
import { Navbar, NavDropdown, MenuItem, NavItem, Nav } from 'react-bootstrap';

export default function HeaderNav() {
  return(
  	// <div className = "navbarcontainer">
    // <nav className = "navbar">
    //   <h3>About</h3>
    //   <h3>Pictures</h3>
    //   <h3>Gym</h3>
    //  </nav>
    //  </div>


  // <nav className="navbar navbar-inverse">
  //   <div className="container-fluid">
  //     <div className="navbar-header">
  //       <a className="navbar-brand" href="#">WebSiteName</a>
  //     </div>
  //     <ul className="nav navbar-nav">
  //       <li className="active"><a href="#">Home</a></li>
  //       <li><a href="#">Page 1</a></li>
  //       <li><a href="#">Page 2</a></li>
  //       <li><a href="#">Page 3</a></li>
  //     </ul>
  //   </div>
  // </nav>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
  );
}
