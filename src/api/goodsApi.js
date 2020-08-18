import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/goods/";

export function getGoods() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveGoods(goods) {
  return fetch(baseUrl + (goods.id || ""), {
    method: goods.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(goods),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteGoods(goodsId) {
  return fetch(baseUrl + goodsId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
