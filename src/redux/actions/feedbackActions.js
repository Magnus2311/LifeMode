import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/feedbackApi";
import { toast } from "react-toastify";

export function addShopItemFeedbackSuccess(feedback) {
  return { type: actionTypes.ADD_SHOPITEMFEEDBACK_SUCCESS, feedback };
}
export function shopItemRatingUpdate(shopItem) {
  return { type: actionTypes.UPDATE_SHOPITEM, shopItem };
}

export function addShopItemFeedback(feedbacks, feedback) {
  return function (dispatch) {
    return webApi
      .addShopItemFeedback(feedback)
      .then((feedback) => {
        dispatch(addShopItemFeedbackSuccess(feedback));
        toast.success("Feedback added successfully!");
        calculateShopItemRating(dispatch, feedbacks, feedback);
      })
      .catch((error) => {
        toast.error("Adding feedback failed!");
        throw error;
      });
  };
}

export function loadShopItemFeedbackSuccess(feedbacks) {
  return { type: actionTypes.LOAD_SHOPITEMFEEDBACKS_SUCCESS, feedbacks };
}

export function loadShopItemFeedback(shopItemId) {
  return function (dispatch) {
    return webApi
      .loadShopItemFeedbacks(shopItemId)
      .then((feedbacks) => {
        dispatch(loadShopItemFeedbackSuccess(feedbacks));
      })
      .catch((error) => {
        throw error;
      });
  };
}
export function calculateShopItemRating(dispatch, feedbacks, feedback) {
  let result = 0;
  feedbacks.map((feedback) => (result += feedback.rating));
  let shopItemRating = (result + feedback.rating) / (feedbacks.length + 1);
  let updatedShopItem = { ...feedback.shopItem, rating: shopItemRating };

  dispatch(shopItemRatingUpdate(updatedShopItem));
}
