import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/HomePage";
import PageNotFound from "./components/pages/PageNotFound";
import AboutPage from "./components/pages/about/AboutPage";
import CategoriesListPage from "./components/pages/categories/CategoriesListPage";
import AddProductPage from "./components/pages/Goods/AddProductPage";
import ProductsListPage from "./components/pages/Goods/ProductsListPage";
import AddCategoryPage from "./components/pages/categories/AddCategoryPage";
import { connect } from "react-redux";
import * as categoryActions from "./redux/actions/categoryActions";

function AppRouter(props) {
  const { dispatch } = props;
  useEffect(() => {
    dispatch(categoryActions.loadCategories());
  });

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/products/add" component={AddProductPage} />
        <Route path="/products/list" component={ProductsListPage} />
        <Route path="/categories/all" component={CategoriesListPage} />
        <Route path="/categories/add" component={AddCategoryPage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}
export default connect()(AppRouter);
