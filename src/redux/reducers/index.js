import { combineReducers } from "redux";

import products from "./productsReducers";
import categories from "./categoryReducers";
import loader from "./loaderReducers";

const rootReducer = combineReducers({
  products,
  categories,
  loader,
});

export default rootReducer;
