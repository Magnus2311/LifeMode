import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../common/Contexts/AuthContext";

const LoggedNavMenu = () => {
  const authContext = useContext(AuthContext);

  return (
    <Link to="/auth/index" className="text-dark nav-link">
      {authContext.user.username
        ? authContext.user.username.toLowerCase()
        : "WTF????"}
    </Link>
  );
};

export default LoggedNavMenu;
