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

export function loadShopItemsByCategory(shopCategoryId) {
  return function (dispatch) {
    return webApi
      .getShopItemsByCategory(shopCategoryId)
      .then((shopItemsByCategory) => {
        dispatch(loadShopItemsByCategorySuccess(shopItemsByCategory));
        dispatch({
          type: actionTypes.REQUEST_LOAD_SHOPITEMSBYCATEGORY_SUCCESS,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.REQUEST_LOAD_SHOPITEMSBYCATEGORY_SUCCESS,
        });
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
