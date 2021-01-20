import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:5000/shop/shopItems";

export function getShopItemsByCategory(shopCategoryId, pageNumber) {
  return fetch(
    baseUrl +
      "?categoryId=" +
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
  return fetch(baseUrl + "/" + (shopItem.id || ""), {
    method: shopItem.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(shopItem),
  })
    .then(handleResponse)
    .catch(handleError);
}
