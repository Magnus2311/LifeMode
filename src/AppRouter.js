import React from "react";
import { Switch, Route } from "react-router";
import Home from "./components/pages/home/HomePage";
import PageNotFound from "./components/pages/PageNotFound";
import AboutPage from "./components/pages/about/AboutPage";
import AddGoodsPage from "./components/pages/Goods/AddGoodsPage";
import GoodsListPage from "./components/pages/Goods/GoodsListPage";

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
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/goods/add">
          <AddGoodsPage />
        </Route>
        <Route path="/goods/list">
          <GoodsListPage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}
export default AppRouter;
