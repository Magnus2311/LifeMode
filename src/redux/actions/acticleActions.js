import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/articlesApi";
import { toast } from "react-toastify";

export function loadArticle(articleId) {
  return function (dispatch) {
    dispatch(loadArticleLoading());
    return webApi
      .getArticle(articleId)
      .then((article) => {
        dispatch(loadArticleSuccess(article));
      })
      .catch((error) => {
        toast.error("Loading article failed!");
        throw error;
      });
  };
}

export function loadArticleLoading() {
  return {
    type: actionTypes.REQUEST_LOADARTICLE_SUCCESS,
  };
}

export function loadArticleSuccess(article) {
  return {
    type: actionTypes.LOAD_ARTICLE_SUCCESS,
    article,
  };
}

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

export function saveArticle(article) {
  return function (dispatch) {
    return webApi
      .saveArticle(article)
      .then((article) => {
        dispatch(saveArticleSuccess(article));
        toast.success("Article added successfully!");
      })
      .catch((error) => {
        toast.error("Adding article failed!");
        throw error;
      });
  };
}

export function saveArticleSuccess(article) {
  return { type: actionTypes.SAVE_ARTICLE_SUCCESS, article };
}
