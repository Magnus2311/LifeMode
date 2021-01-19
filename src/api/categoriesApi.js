import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "/api/categories/";

export function getCategories() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveCategory(category) {
  return fetch(baseUrl + (category.id || ""), {
    method: category.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(category),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCategory(categoryId) {
  return fetch(baseUrl + categoryId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
