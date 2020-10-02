import * as actionTypes from "../actions/actionTypes";

export default function loaderReducers(
  loader = { isCategoriesLoading: false, isProductsLoading: false },
  action
) {
  switch (action.type) {
    case actionTypes.REQUEST_LOAD_CATEGORIES:
      return { ...loader, isCategoriesLoading: true };
    case actionTypes.REQUEST_LOAD_CATEGORIES_SUCCESS:
      return { ...loader, isCategoriesLoading: false };
    case actionTypes.REQUEST_LOAD_PRODUCTS:
      return { ...loader, isProductsLoading: true };
    case actionTypes.REQUEST_LOAD_PRODUCTS_SUCCESS:
      return { ...loader, isProductsLoading: false };
    default:
      return loader;
  }
}
