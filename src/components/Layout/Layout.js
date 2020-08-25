import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Translator } from "../../services/languages/Laguage";
import LanguageSelector from "../pages/LanguageSelector";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ minWidth: "380px" }}>
      <Link className="navbar-brand" to="/">
        Life Mode
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/test">Test</Nav.Link>
          <Link className="nav-link" to="/about">
            <Translator getString="About" />
          </Link>

          <NavDropdown title={<Translator getString="Goods" />}>
            <NavDropdown.Item className="nav-dropdown-item">
              <Link className="dropdown-item" to="/goods/add">
                <Translator getString="Add" />
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-dropdown-item">
              <Link className="dropdown-item" to="/goods/list">
                <Translator getString="Show" />
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Link className="nav-link" to="/login">
            <Translator getString="Login" />
          </Link>
        </Nav>
      </Navbar.Collapse>
      <LanguageSelector />
    </Navbar>
  );
};

export default Layout;
