import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "/shop/shopItems";

export function getShopItemsByCategory(shopCategoryId) {
  return fetch(baseUrl + "?categoryId=" + (shopCategoryId || ""), {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveShopItem(shopItem) {
  return fetch(baseUrl + "/" + (shopItem.id || ""), {
    method: shopItem.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(shopItem),
  })
    .then(handleResponse)
    .catch(handleError);
}
