import { handleResponse, handleError, get, post } from "./apiUtils";
const baseUrl = "/api/feedbacks";

export function addShopItemFeedback(feedback) {
  return post(baseUrl, feedback).then(handleResponse).catch(handleError);
}

export function loadShopItemFeedbacks(shopItemId) {
  return get(baseUrl + "/getByShopItemId?shopItemId=" + (shopItemId || ""))
    .then(handleResponse)
    .catch(handleError);
}
