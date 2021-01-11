import * as actionTypes from "../actions/actionTypes";

export default function shopItemsByCategoryReducers(
  shopItemsByCategory = [],
  action
) {
  switch (action.type) {
    case actionTypes.LOAD_SHOPITEMSBYCATEGORY_SUCCESS:
      return {
        ...shopItemsByCategory,
        shopItemsByCategory: action.shopItemsByCategory,
      };
    default:
      return shopItemsByCategory;
  }
}
