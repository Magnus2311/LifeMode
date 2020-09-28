import * as actionTypes from "../actions/actionTypes";

export default function productsReducer(products = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS_SUCCESS:
      return action.products;
    case actionTypes.SAVE_PRODUCT_SUCCESS:
      return [...products, { ...action.products }];
    default:
      return products;
  }
}
