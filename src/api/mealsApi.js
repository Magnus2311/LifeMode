import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:5000/meals/";

export function getMeals() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveMeal(meal) {
  return fetch(baseUrl + (meal.id || ""), {
    method: meal.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(meal),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteMeal(mealId) {
  return fetch(baseUrl + mealId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
