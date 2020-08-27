import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/HomePage";
import PageNotFound from "./components/pages/PageNotFound";
import AboutPage from "./components/pages/about/AboutPage";
import CategoriesListPage from "./components/pages/categories/CategoriesListPage";
import AddProductPage from "./components/pages/Goods/AddProductPage";
import ProductsListPage from "./components/pages/Goods/ProductsListPage";

function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/products/add" component={AddProductPage} />
        <Route path="/products/list" component={ProductsListPage} />
        <Route path="/categories/all" component={CategoriesListPage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}
export default AppRouter;
