import React, { useContext } from "react";
import { AuthContext } from "../../common/Contexts/AuthContext";
import Login from "./Login";

const AuthenticateBeforeRender = ({ render }) => {
  const user = useContext(AuthContext);

  return user.username ? render() : <Login returnAfterLogin={render()} />;
};

export default AuthenticateBeforeRender;
