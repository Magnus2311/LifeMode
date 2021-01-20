import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Translator } from "../../services/languages/Laguage";
import LanguageSelector from "../pages/LanguageSelector";
import { Link } from "react-router-dom";
import UserNavMenu from "../pages/auth/UserNavMenu";

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
          </NavDropdown>
          <Link className="nav-link" to="/categories/all" onClick={handleClick}>
            <Translator getString="Categories" />
          </Link>

          <NavDropdown title={<Translator getString="Add" />}>
            <NavDropdown.Item className="nav-dropdown-item">
              <Link
                className="dropdown-item"
                to="/categories/add"
                onClick={handleClick}
              >
                <Translator getString="Category" />
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-dropdown-item">
              <Link
                className="dropdown-item"
                to="/shop/add"
                onClick={handleClick}
              >
                <Translator getString="Shop category" />
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-dropdown-item">
              <Link
                className="dropdown-item"
                to="/shop/addShopItem"
                onClick={handleClick}
              >
                <Translator getString="Shop item" />
              </Link>
            </NavDropdown.Item>
          </NavDropdown>

          <Link className="nav-link" to="/shop" onClick={handleClick}>
            <Translator getString="Shop" />
          </Link>
        </Nav>
      </Navbar.Collapse>
      <UserNavMenu />
      <LanguageSelector />
    </Navbar>
  );
};

export default Layout;
