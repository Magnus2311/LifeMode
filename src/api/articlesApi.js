import { handleResponse, handleError, get } from "./apiUtils";
const baseUrl = "/api/knowledge/";

export function getArticle(articleId) {
  debugger;
  return fetch(baseUrl + "article?articleId=" + (articleId || ""), {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then(handleResponse)
    .catch(handleError);
}

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

export function saveArticle(article) {
  return fetch(baseUrl + "article/" + (article.id || ""), {
    method: article.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(article),
  })
    .then(handleResponse)
    .catch(handleError);
}
