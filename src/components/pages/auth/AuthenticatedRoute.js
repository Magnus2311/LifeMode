import React from "react";
import { Route } from "react-router";
import { isAuthenticated } from "../../../services/auth/isAuthenticated";
import AuthenticateBeforeRender from "./AuthenticateBeforeRender";

export const AuthenticatedRoute = ({ Component, exact, path }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <AuthenticateBeforeRender render={() => <Component {...props} />} />
      )
    }
  />
);
