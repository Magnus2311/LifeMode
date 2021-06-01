import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "/api/knowledge";

export function getKnowledgeCategories() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveCategory(category) {
  return fetch(baseUrl + (category.id || ""), {
    method: category.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(category),
  })
    .then(handleResponse)
    .catch(handleError);
}
