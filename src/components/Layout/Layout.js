import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Translator } from "../../services/languages/Laguage";
import LanguageSelector from "../pages/LanguageSelector";
import { Link } from "react-router-dom";

const Layout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (isExpanded) setIsExpanded(!isExpanded);
  };

  const handleOpenning = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ minWidth: "380px" }}
      expanded={isExpanded}
    >
      <Link className="navbar-brand" to="/" onClick={handleClick}>
        Life Mode
      </Link>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ marginRight: "50px" }}
        onClick={handleOpenning}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/about" onClick={handleClick}>
            <Translator getString="About" />
          </Link>
          <NavDropdown title={<Translator getString="Products" />}>
            <NavDropdown.Item className="nav-dropdown-item">
              <Link
                className="dropdown-item"
                to="/products/add"
                onClick={handleClick}
              >
                <Translator getString="Add" />
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-dropdown-item">
              <Link
                className="dropdown-item"
                to="/products/"
                onClick={handleClick}
              >
                <Translator getString="Show" />
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Link className="nav-link" to="/login">
            <Translator getString="Login" />
           </Link>
          <Link className="nav-link" to="/categories/all" onClick={handleClick}>
            <Translator getString="Categories" />
          </Link>
          <Link className="nav-link" to="/categories/add" onClick={handleClick}>
            <Translator getString="Add category" />
          </Link>
        </Nav>
      </Navbar.Collapse>
      <LanguageSelector />
    </Navbar>
  );
};

export default Layout;
