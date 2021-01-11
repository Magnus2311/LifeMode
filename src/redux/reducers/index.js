import { combineReducers } from "redux";

import products from "./productsReducers";
import categories from "./categoryReducers";
import loader from "./loaderReducers";
import shopCategories from "./shopReducers";
import shopItemsByCategory from "./shopItemsReducers";

const rootReducer = combineReducers({
  products,
  categories,
  loader,
  shopCategories,
  shopItemsByCategory,
});

export default rootReducer;
