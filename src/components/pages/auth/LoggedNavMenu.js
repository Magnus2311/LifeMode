import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../common/Contexts/AuthContext";

const LoggedNavMenu = () => {
  const authContext = useContext(AuthContext);

  return (
    authContext.user.username && (
      <Link to="/auth/index" className="text-dark nav-link">
        {authContext.user.username.toLowerCase()}
      </Link>
    )
  );
};

export default LoggedNavMenu;
