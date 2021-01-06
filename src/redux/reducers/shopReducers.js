import * as actionTypes from "../actions/actionTypes";

export default function shopCategoryReducers(shopCategories = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_SHOPCATEGORIES_SUCCESS:
      return action.shopCategories;
    default:
      return shopCategories;
  }
}
