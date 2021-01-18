import React, { useContext } from "react";
import { AuthContext } from "../../Common/Contexts/AuthContext";
import LoggedNavMenu from "./LoggedNavMenu";
import NotLoggedNavMenu from "./NotLoggedNavMenu";

const UserNavMenu = () => {
  const { user } = useContext(AuthContext);
  return user.username ? <LoggedNavMenu /> : <NotLoggedNavMenu />;
};

export default UserNavMenu;
