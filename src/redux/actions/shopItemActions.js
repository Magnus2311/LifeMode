import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/shopItemsApi";
import { toast } from "react-toastify";

export function saveShopItemSuccess(shopItem) {
  return { type: actionTypes.SAVE_SHOPITEM_SUCCESS, shopItem };
}

export function saveShopItem(shopItem) {
  return function (dispatch) {
    debugger;
    return webApi
      .saveShopItem(shopItem)
      .then((shopItem) => {
        dispatch(saveShopItemSuccess(shopItem));
        toast.success("Shop item added successfully!");
      })
      .catch((error) => {
        toast.error("Adding shop item failed!");
        throw error;
      });
  };
}

export function loadShopItemSuccess(shopItem) {
  return { type: actionTypes.LOAD_SHOPITEM_SUCCESS, shopItem };
}

export function loadShopItem(shopItemId) {
  debugger;
  return function (dispatch) {
    return webApi
      .loadShopItem(shopItemId)
      .then((shopItem) => {
        dispatch(loadShopItemSuccess(shopItem));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadShopItemsByCategory(shopCategoryId, pageNumber) {
  return function (dispatch) {
    dispatch(loadShopItemsByCategoryLoading());
    return webApi
      .getShopItemsByCategory(shopCategoryId, pageNumber)
      .then((shopItemsByCategory) => {
        dispatch(loadShopItemsByCategorySuccess(shopItemsByCategory));
      })
      .catch((error) => {
        toast.error("Loading shop items failed!");
        throw error;
      });
  };
}

export function loadShopItemsByCategorySuccess(shopItemsByCategory) {
  return {
    type: actionTypes.LOAD_SHOPITEMSBYCATEGORY_SUCCESS,
    shopItemsByCategory,
  };
}

export function loadShopItemsByCategoryLoading() {
  return {
    type: actionTypes.REQUEST_LOAD_SHOPITEMSBYCATEGORY_SUCCESS,
  };
}
