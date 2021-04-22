import { handleResponse, handleError } from "../../api/apiUtils";

const baseUrl = "/api/users/";

export const authenticate = () => {
  return fetch(baseUrl + "getUsername", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
  })
    .then((response) => {
      if (response.status === 200) return response.json();

      throw new Error("Unauthorized");
    })
    .then((userResponse) => {
      return userResponse;
    })
    .catch(() => {
      return {};
    });
};

export const sighOut = async () => {
  await fetch(baseUrl + "logout", {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const checkConfirmationToken = (email, token) => {
  return fetch(`${baseUrl}confirmEmail?email=${email}&token=${token}`, {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => true)
    .catch(() => false);
};
