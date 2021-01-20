import * as actionTypes from "../actions/actionTypes";

export default function shopItemsPageNumber(pageNumber = 1, action) {
  switch (action.type) {
    case actionTypes.LOAD_SHOPITEMSBYCATEGORY_SUCCESS:
      return pageNumber + 1;
    default:
      return pageNumber;
  }
}
