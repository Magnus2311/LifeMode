import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "/api/nutritions";

export function addDailyNutrition(nutrition) {
  return fetch(baseUrl, {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: {
      "content-type": "application/json",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
    },
    body: JSON.stringify(nutrition),
  }).then((response) => {
    if (response.ok) {
      response.json().then((nutrition) => nutrition);
    }
  });
}

export function getDailyNutritions(currentDate) {
  debugger;
  return fetch(`${baseUrl}/get-for-day?date=${currentDate}`, {
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
