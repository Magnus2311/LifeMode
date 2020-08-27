import { combineReducers } from "redux";

import products from "./productsReducers";
import categories from "./categoryReducers";

const rootReducer = combineReducers({
  products,
  categories,
});

export default rootReducer;
