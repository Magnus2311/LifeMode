import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/categoriesApi";
import { toast } from "react-toastify";

export function loadCategoriesSuccess(categories) {
  return { type: actionTypes.LOAD_CATEGORIES_SUCCESS, categories };
}

export function saveCategorySuccess(category) {
  return { type: actionTypes.LOAD_CATEGORIES_SUCCESS, category };
}

export function loadCategories() {
  return function (dispatch) {
    return webApi
      .getCategories()
      .then((categories) => {
        dispatch(loadCategoriesSuccess(categories));
        toast.success("Categories loaded successfully");
      })
      .catch((error) => {
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
        toast.error("Category added successfully!");
      })
      .catch((error) => {
        toast.error("Adding category failed!");
        throw error;
      });
  };
}
