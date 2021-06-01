import { handleResponse, handleError, get } from "./apiUtils";
const baseUrl = "/api/shop/";

export function getShopItemsByCategory(shopCategoryId, pageNumber) {
  return fetch(
    baseUrl +
      "shopItems?categoryId=" +
      (shopCategoryId || "") +
      "&pageNumber=" +
      (pageNumber || ""),
    {
      method: "GET",
      headers: { "content-type": "application/json" },
    }
  )
    .then(handleResponse)
    .catch(handleError);
}

export function saveShopItem(shopItem) {
  return fetch(baseUrl + "shopItems/" + (shopItem.id || ""), {
    method: shopItem.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(shopItem),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function loadShopItem(shopItemId) {
  return get(baseUrl + "shopItem?shopItemId=" + (shopItemId || ""))
    .then(handleResponse)
    .catch(handleError);
}
