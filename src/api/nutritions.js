import { handleResponse, handleError, get } from "./apiUtils";
const baseUrl = "/api/nutritions/";

export function addDailyNutrition(nutrition) {
  return fetch(baseUrl + (nutrition.id || ""), {
    method: nutrition.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(nutrition),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getDailyNutritions(date) {
  return get(baseUrl + date)
    .then(handleResponse)
    .catch(handleError);
}

export function deleteDailyNutrition(nutritionId) {
  return fetch(baseUrl + nutritionId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
