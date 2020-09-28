import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:5000/products/";

export function getProducts() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveProduct(product) {
  return fetch(baseUrl + (product.id || ""), {
    method: product.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteProduct(goodsId) {
  return fetch(baseUrl + goodsId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
