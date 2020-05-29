import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/home" className="active nav-link">Dashboard</Link>
            <Link to="/category" className="nav-link">Category</Link>
            <NavDropdown title="Maintenance" id="basic-nav-dropdown">
              <Link to="/category" className="dropdown-item">Category</Link>
              <NavDropdown.Divider />
              <Link to="/category" className="dropdown-item">Category</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}
export default Header;