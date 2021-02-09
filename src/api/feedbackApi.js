import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "/api/feedbacks";

export function addShopItemFeedback(feedback) {
  debugger;
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(feedback),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function loadShopItemFeedbacks(shopItemId) {
  return fetch(baseUrl + "/getByShopItemId?shopItemId=" + (shopItemId || ""), {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then(handleResponse)
    .catch(handleError);
}
