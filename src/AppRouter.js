import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/HomePage";
import PageNotFound from "./components/pages/PageNotFound";
import AboutPage from "./components/pages/about/AboutPage";
import AddGoodsPage from "./components/pages/Goods/AddGoodsPage";
import GoodsListPage from "./components/pages/Goods/GoodsListPage";
import CategoriesListPage from "./components/pages/categories/CategoriesListPage";

function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/goods/add" component={AddGoodsPage} />
        <Route path="/goods/list" component={GoodsListPage} />
        <Route path="/categories/all" component={CategoriesListPage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}
export default AppRouter;
