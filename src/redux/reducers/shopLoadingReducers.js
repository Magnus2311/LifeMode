import * as actionTypes from "../actions/actionTypes";

export default function shopLoadingReducers(loadingShopItems = false, action) {
  switch (action.type) {
    case actionTypes.REQUEST_LOAD_SHOPITEMSBYCATEGORY_SUCCESS:
      return true;
    case actionTypes.LOAD_SHOPITEMSBYCATEGORY_SUCCESS:
      return false;
    default:
      return loadingShopItems;
  }
}
