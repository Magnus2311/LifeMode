import React from "react";
import { Link } from "react-router-dom";
import { NavItem, NavLink } from "reactstrap";

const NotLoggedNavMenu = () => {
  return (
    <>
      <NavItem>
        <NavLink tag={Link} className="text-dark" to="/auth/registration">
          Register
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} className="text-dark" to="/auth/login">
          Login
        </NavLink>
      </NavItem>
    </>
  );
};

export default NotLoggedNavMenu;
