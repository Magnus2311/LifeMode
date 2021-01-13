import { combineReducers } from "redux";

import products from "./productsReducers";
import categories from "./categoryReducers";
import loader from "./loaderReducers";
import shopCategories from "./shopReducers";
import shopItemsByCategory from "./shopItemsReducers";
import brands from "./brandsReducers";

const rootReducer = combineReducers({
  products,
  categories,
  loader,
  shopCategories,
  shopItemsByCategory,
  brands,
});

export default rootReducer;
