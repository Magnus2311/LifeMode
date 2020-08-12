import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Layout = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Life Mode</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/test">Test</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Layout;
