import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Translator } from "../../services/languages/Laguage";
import LanguageSelector from "../pages/LanguageSelector";

const Layout = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ minWidth: "380px" }}>
      <Navbar.Brand href="/">Life Mode</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/test">Test</Nav.Link>
          <Nav.Link href="/test">Test</Nav.Link>
          <NavDropdown title={<Translator getString="Goods" />}>
            <NavDropdown.Item href="/goods/add">Add</NavDropdown.Item>
            <NavDropdown.Item href="/goods/list">Show</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <LanguageSelector />
    </Navbar>
  );
};

export default Layout;
