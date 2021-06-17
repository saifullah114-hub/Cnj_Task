import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
const NavbarTop = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
      <Navbar.Brand href="/">
        <img src={logo} alt="coding-ninja" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">Courses</Nav.Link>
          <NavDropdown title="Practice" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Code Problems
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Interview Experiences
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Guided Paths</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Dashboard</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#pricing">Events</Nav.Link>
          <Nav.Link href="#pricing">Campus Ninjas</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#deets">My Classroom</Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className="login_btn">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarTop;
