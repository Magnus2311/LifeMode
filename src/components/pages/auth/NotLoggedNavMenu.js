import React from "react";
import { Link } from "react-router-dom";
import { Translator } from "../../../services/languages/Laguage";

const NotLoggedNavMenu = () => {
  return (
    <>
      <Link tag={Link} className="nav-link" to="/auth/registration">
        <Translator getString="Register" />
      </Link>
      <Link tag={Link} className="nav-link" to="/auth/login">
        <Translator getString="Login" />
      </Link>
    </>
  );
};

export default NotLoggedNavMenu;
