import * as actionTypes from "../actions/actionTypes";

export default function categoryReducers(categories = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_CATEGORIES_SUCCESS:
      return action.categories;
    case actionTypes.SAVE_CATEGORY_SUCCESS:
      return [...categories, { ...action.category }];
    default:
      return categories;
  }
}
