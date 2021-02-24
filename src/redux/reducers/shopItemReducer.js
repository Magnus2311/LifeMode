import * as actionTypes from "../actions/actionTypes";

export default function shopitem(shopItem = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_SHOPITEM_SUCCESS:
      return action.shopItem;
    case actionTypes.UPDATE_SHOPITEM:
      return { ...shopItem };
    default:
      return shopItem;
  }
}
