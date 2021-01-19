import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "/api/shop/";

export function getShopCategories() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveShopCategory(shopCategory) {
  return fetch(baseUrl + (shopCategory.id || ""), {
    method: shopCategory.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(shopCategory),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getBrands() {
  return fetch(baseUrl + "brands")
    .then(handleResponse)
    .catch(handleError);
}
