import { toast } from "react-toastify";
const baseUrl = "http://localhost:5000/users/";

export function add(user) {
  fetch(baseUrl + "add", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

export function login(user) {
  return fetch(baseUrl + "login", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(async (response) => {
      var isSuccessful = response.status === 200;
      var loginResponse = {
        isSuccessful: isSuccessful,
        token: JSON.parse(await response.text()),
      };
      return loginResponse;
    })
    .then((loginResponse) => {
      if (loginResponse.isSuccessful)
        toast.success("You've logged in successfully!");
      else toast.error("Login failed! Check your credentials!");
      return loginResponse.isSuccessful;
    })
    .catch(() => {
      return false;
    });
}

export function refreshAccessToken() {
  return fetch(baseUrl + "getAccessToken", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      debugger;
      var isSuccessful = response.status === 200;
      var loginResponse = {
        isSuccessful: isSuccessful,
        token: JSON.parse(await response.text()),
      };
      return loginResponse;
    })
    .catch((error) => {
      throw error;
    })
    .then((loginResponse) => loginResponse);
}
