import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/categoriesApi";
import { toast } from "react-toastify";

export function loadCategoriesSuccess(categories) {
  return {
    type: actionTypes.LOAD_CATEGORIES_SUCCESS,
    categories,
    loading: false,
  };
}

export function saveCategorySuccess(category) {
  return { type: actionTypes.SAVE_CATEGORY_SUCCESS, category };
}

export function loadCategories() {
  return function (dispatch) {
    dispatch({ type: actionTypes.REQUEST_LOAD_CATEGORIES });
    return webApi
      .getCategories()
      .then((categories) => {
        dispatch(loadCategoriesSuccess(categories));
        dispatch({ type: actionTypes.REQUEST_LOAD_CATEGORIES_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.REQUEST_LOAD_CATEGORIES_SUCCESS });
        toast.error("Loading categories failed!");
        throw error;
      });
  };
}

export function saveCategory(category) {
  return function (dispatch) {
    return webApi
      .saveCategory(category)
      .then((category) => {
        dispatch(saveCategorySuccess(category));
        toast.success("Category added successfully!");
      })
      .catch((error) => {
        toast.error("Adding category failed!");
        throw error;
      });
  };
}
