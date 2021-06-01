import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/articlesApi";
import { toast } from "react-toastify";

export function loadArticlesByCategory(knowledgeCategoryId, pageNumber) {
  return function (dispatch) {
    dispatch(loadArticlesByCategoryLoading());
    return webApi
      .getArticlesByCategory(knowledgeCategoryId, pageNumber)
      .then((articlesByCategory) => {
        dispatch(loadArticlesByCategorySuccess(articlesByCategory));
      })
      .catch((error) => {
        toast.error("Loading articles failed!");
        throw error;
      });
  };
}

export function loadArticlesByCategorySuccess(articlesByCategory) {
  return {
    type: actionTypes.LOAD_ARTICLESBYCATEGORY_SUCCESS,
    articlesByCategory,
  };
}

export function loadArticlesByCategoryLoading() {
  return {
    type: actionTypes.REQUEST_LOAD_ARTICLESBYCATEGORY_SUCCESS,
  };
}
