import { combineReducers } from "redux";

import products from "./productsReducers";
import categories from "./categoryReducers";
import loader from "./loaderReducers";
import shopCategories from "./shopReducers";
import shopItemsByCategory from "./shopItemsReducers";
import brands from "./brandsReducers";
import loadingShopItems from "./shopLoadingReducers";
import pageNumber from "./shopItemsPageNumber";
import shopItem from "./shopItemReducer";

const rootReducer = combineReducers({
  products,
  categories,
  loader,
  shopCategories,
  shopItemsByCategory,
  brands,
  loadingShopItems,
  pageNumber,
  shopItem,
});

export default rootReducer;
