import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/home/HomePage";
import PageNotFound from "./components/pages/PageNotFound";
import AboutPage from "./components/pages/about/AboutPage";
import CategoriesListPage from "./components/pages/categories/CategoriesListPage";
import AddProductPage from "./components/pages/Goods/AddProductPage";
import ProductsListPage from "./components/pages/Goods/ProductsListPage";
import AddCategoryPage from "./components/pages/categories/AddCategoryPage";
import { connect } from "react-redux";
import * as categoryActions from "./redux/actions/categoryActions";
import SubCategoriesListPage from "./components/pages/categories/SubCategoriesListPage";

function AppRouter(props) {
  const { dispatch } = props;

  const location = useLocation();

  useEffect(() => {
    dispatch(categoryActions.loadCategories());
  });

  return (
    <>
      {/* <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <div className="page"> */}
      <Switch key={location.key} location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/products/add" component={AddProductPage} />
        <Route path="/products/:categoryId?" component={ProductsListPage} />
        <Route path="/categories/all" component={CategoriesListPage} />
        <Route path="/categories/add" component={AddCategoryPage} />
        <Route
          path="/categories/:categoryId?"
          component={SubCategoriesListPage}
        />
        <Route component={PageNotFound} />
      </Switch>
      {/* </div>
        </CSSTransition>
      </TransitionGroup> */}
    </>
  );
}
export default connect()(AppRouter);
