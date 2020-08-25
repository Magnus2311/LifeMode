import * as actionTypes from "../actions/actionTypes";

export default function categoryReducers(categories = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_CATEGORIES_SUCCESS:
      return action.categories;
    default:
      return categories;
  }
}
