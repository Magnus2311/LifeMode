import * as actionTypes from "../actions/actionTypes";
import * as webApi from "../../api/shopApi";
import { toast } from "react-toastify";

export function loadShopCategories() {
  return function (dispatch) {
    return webApi
      .getShopCategories()
      .then((shopCategories) => {
        dispatch(loadShopCategoriesSuccess(shopCategories));
        dispatch({ type: actionTypes.REQUEST_LOAD_SHOPCATEGORIES_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.REQUEST_LOAD_SHOPCATEGORIES_SUCCESS });
        toast.error("Loading shop categories failed!");
        throw error;
      });
  };
}

export function loadShopCategoriesSuccess(shopCategories) {
  return {
    type: actionTypes.LOAD_SHOPCATEGORIES_SUCCESS,
    shopCategories,
  };
}

export function saveShopCategory(shopCategory) {
  return function (dispatch) {
    return webApi
      .saveShopCategory(shopCategory)
      .then((category) => {
        dispatch(saveShopCategorySuccess(shopCategory));
        toast.success("Shop category added successfully!");
      })
      .catch((error) => {
        toast.error("Adding shop category failed!");
        throw error;
      });
  };
}

export function saveShopCategorySuccess(shopCategory) {
  return { type: actionTypes.SAVE_SHOPCATEGORY_SUCCESS, shopCategory };
}
