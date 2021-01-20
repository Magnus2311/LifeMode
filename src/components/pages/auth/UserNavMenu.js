import React, { useContext } from "react";
import { AuthContext } from "../../common/Contexts/AuthContext";
import LoggedNavMenu from "./LoggedNavMenu";
import NotLoggedNavMenu from "./NotLoggedNavMenu";

const UserNavMenu = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mr-auto navbar-nav">
      <div
        className="dropdown nav-item"
        style={{ display: "inline-flex", right: "55px" }}
      >
        {user.username ? <LoggedNavMenu /> : <NotLoggedNavMenu />}
      </div>
    </div>
  );
};

export default UserNavMenu;
