import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/home/HomePage";
import AboutPage from "./components/pages/about/AboutPage";
import CategoriesListPage from "./components/pages/categories/CategoriesListPage";
import AddProductPage from "./components/pages/products/AddProductPage";
import ProductsListPage from "./components/pages/products/ProductsListPage";
import AddCategoryPage from "./components/pages/categories/AddCategoryPage";
import AddShopCategoryPage from "./components/pages/shop/AddShopCategoryPage";
import ShopPage from "./components/pages/shop/ShopPage";
import { connect, useStore } from "react-redux";
import * as categoryActions from "./redux/actions/categoryActions";
import * as productActions from "./redux/actions/productsActions";
import * as shopActions from "./redux/actions/shopActions";
import SubCategoriesListPage from "./components/pages/categories/SubCategoriesListPage";
import ShopItemsPage from "./components/pages/shop/ShopItemsPage";
import AddShopItemPage from "./components/pages/shop/AddShopItemPage";
import Registration from "./components/pages/auth/Registration";
import Login from "./components/pages/auth/Login";
import { AuthenticatedRoute } from "./components/pages/auth/AuthenticatedRoute";
import ShopItemPreview from "./components/pages/shop/ShopItemPreview";
import Cart from "./components/pages/shop/cart/Cart";
import EmailSent from "./components/pages/auth/EmailSent";

function AppRouter(props) {
  const { dispatch } = props;

  const location = useLocation();

  var state = useStore().getState();
  if (!state.categories || state.categories.length === 0)
    dispatch(categoryActions.loadCategories());
  if (!state.products || state.products.length === 0)
    dispatch(productActions.loadProducts());
  if (!state.shopCategories || state.shopCategories.length === 0)
    dispatch(shopActions.loadShopCategories());

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
        <AuthenticatedRoute
          exact
          path="/products/add"
          Component={AddProductPage}
        />
        <Route
          path="/products/:categoryId"
          exact
          component={ProductsListPage}
        />
        <Route path="/categories/all" exact component={CategoriesListPage} />
        <Route path="/categories/add" exact component={AddCategoryPage} />
        <Route path="/shop/add" exact component={AddShopCategoryPage} />
        <Route path="/shop/addShopItem" exact component={AddShopItemPage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/shop/cart" component={Cart} />
        <Route
          path="/categories/:categoryId?"
          exact
          component={SubCategoriesListPage}
        />
        <Route
          path="/shop/shopItems/:shopCategoryId?"
          exact
          component={ShopItemsPage}
        />
        <Route path="/auth/registration" component={Registration} />
        <Route path="/auth/login" component={Login} />
        <Route
          path="/shop/shopItems/shopItem/:shopItemId"
          exact
          component={ShopItemPreview}
        />
        <Route
          path="/auth/emailSent/:email"
          component={EmailSent}
        />
      </Switch>
      {/* </div>
        </CSSTransition>
      </TransitionGroup> */}
    </>
  );
}
export default connect()(AppRouter);
