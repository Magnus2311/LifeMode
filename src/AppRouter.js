import React from "react";
import { Switch, Route } from "react-router";
import Home from "./components/Home";

function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default AppRouter;
