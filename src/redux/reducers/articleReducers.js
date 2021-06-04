import * as actionTypes from "../actions/actionTypes";

export default function article(article = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_ARTICLE_SUCCESS:
      return action.article;
    // case actionTypes.UPDATE_ARTICLE:
    //   return { ...article };
    default:
      return article;
  }
}
