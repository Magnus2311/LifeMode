import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/categoriesApi";
import { toast } from "react-toastify";

export function loadCategoriesSuccess(categories) {
  return { type: actionTypes.LOAD_CATEGORIES_SUCCESS, categories };
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
