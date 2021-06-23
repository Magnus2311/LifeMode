import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "/api/nutritions";

export function addDailyNutrition(nutrition) {
  return fetch(baseUrl + (nutrition.id || ""), {
    method: nutrition.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: {
      "content-type": "application/json",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
    },
    body: JSON.stringify(nutrition),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getDailyNutritions(currentDate) {
  return fetch(`${baseUrl}/get-for-day/${currentDate}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
  });
}

export function deleteDailyNutrition(nutritionId) {
  return fetch(baseUrl + nutritionId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
