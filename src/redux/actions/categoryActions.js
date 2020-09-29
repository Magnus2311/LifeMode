import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/categoriesApi";
import { toast } from "react-toastify";
import * as cacheService from "../../services/caching/cacheData";

export function loadCategoriesSuccess(categories) {
  return { type: actionTypes.LOAD_CATEGORIES_SUCCESS, categories };
}

export function saveCategorySuccess(category) {
  return { type: actionTypes.SAVE_CATEGORY_SUCCESS, category };
}

export function loadCategories() {
  return function (dispatch) {
    var categories = cacheService.getWithExpiry("categories");
    return categories
      ? categories
      : webApi
          .getCategories()
          .then((categories) => {
            dispatch(loadCategoriesSuccess(categories));
            cacheService.setWithExpiry("categories", categories);
          })
          .catch((error) => {
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
