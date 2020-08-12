import React from "react";
import { Switch, Route } from "react-router";
import Home from "./components/pages/HomePage";
import PageNotFound from "./components/pages/PageNotFound";
import AboutPage from "./components/pages/AboutPage";

function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}
export default AppRouter;
