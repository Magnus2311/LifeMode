import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../Common/Contexts/AuthContext";

const LoggedNavMenu = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/auth/index");
  };

  return (
    <li className="nav-item" style={{ cursor: "pointer" }}>
      <button onClick={handleClick} className="text-dark nav-link">
        {authContext.user.username
          ? authContext.user.username.toLowerCase()
          : "WTF????"}
      </button>
    </li>
  );
};

export default LoggedNavMenu;
