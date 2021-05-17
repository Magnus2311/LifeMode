import React, { useState, useContext } from "react";
import { useLocation } from "react-router";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Translator } from "../../services/languages/Laguage";
import LanguageSelector from "../pages/LanguageSelector";
import { Link } from "react-router-dom";
import UserNavMenu from "../pages/auth/UserNavMenu";
import { Image } from "react-bootstrap";
import { CartContext } from "../../components/common/Contexts/CartContext";
import "../../css/cart.css";

const Layout = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { itemCount } = useContext(CartContext);
  const location = useLocation();

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
      style={{
        minWidth: "380px",
        position: "fixed",
        top: "0",
        width: "100%",
      }}
      expanded={isExpanded}
    >
      <Link className="navbar-brand" to="/" onClick={handleClick}>
        <img
          src="/images/logos/logo_transparent_no_text.png"
          alt="Life Mode logo"
          style={{ height: "30px", width: "30px", paddingBottom: "5px" }}
        />
        Life Mode
      </Link>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ position: "fixed", left: "10rem", top: "0.5rem" }}
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
          <Link className="nav-link" to="/shop/cart" onClick={handleClick}>
            <Image
              className="cartImage"
              src={`/images/shoppingCart/shopping-cart.png`}
            />
            <Translator getString="Cart" />({itemCount})
          </Link>
          <Link
            className="nav-link"
            to="/calorieCalculator"
            onClick={handleClick}
          >
            <Translator getString="Calorie Calculator" />
          </Link>
          <Link
            className="nav-link"
            to="/nutritions/daily"
            onClick={handleClick}
          >
            <Translator getString="Daily Nutrition" />
          </Link>
        </Nav>
      </Navbar.Collapse>
      <UserNavMenu />
      <LanguageSelector />
      {/* <CartIcon /> */}
    </Navbar>
  );
};

export default Layout;
