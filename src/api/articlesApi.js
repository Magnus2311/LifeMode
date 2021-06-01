import { handleResponse, handleError, get } from "./apiUtils";
const baseUrl = "/api/knowledge/";

export function getArticlesByCategory(knowledgeCategoryId, pageNumber) {
  debugger;
  return fetch(
    baseUrl +
      "articles?knowledgeCategoryId=" +
      (knowledgeCategoryId || "") +
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
