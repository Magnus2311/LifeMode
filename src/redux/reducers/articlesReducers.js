import * as actionTypes from "../actions/actionTypes";

export default function articlesByCategoryReducers(
  articlesByCategory = [],
  action
) {
  switch (action.type) {
    case actionTypes.LOAD_ARTICLESBYCATEGORY_SUCCESS:
      return action.articlesByCategory;
    default:
      return articlesByCategory;
  }
}
