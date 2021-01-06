import { combineReducers } from "redux";

import products from "./productsReducers";
import categories from "./categoryReducers";
import loader from "./loaderReducers";
import shopCategories from "./shopReducers";

const rootReducer = combineReducers({
  products,
  categories,
  loader,
  shopCategories,
});

export default rootReducer;
