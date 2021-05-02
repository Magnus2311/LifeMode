import { post, get, handleResponse, handleError } from "../../api/apiUtils";
import React from "react";
import { toast } from "react-toastify";
import { Translator } from "../languages/Laguage";

const baseUrl = "/api/users/";

export const authenticate = () => {
  return get(baseUrl + "getUsername")
    .then(handleResponse)
    .then((userResponse) => {
      return userResponse;
    })
    .catch(handleError);
};

export const sighOut = async () => {
  await post(baseUrl + "logout");
};

export const checkConfirmationToken = (email, token) => {
  return get(`${baseUrl}confirmEmail?email=${email}&token=${token}`)
    .then((response) => handleResponse(response).then(() => true))
    .catch((error) => handleError(error));
};

export const checkResetPasswordToken = (token) => {
  return fetch(`${baseUrl}checkResetPassword?token=${token}`, {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.status === 200) {
      return response.text();
    }
  });
};

export const sendResetPasswordEmail = (user) => {
  return fetch(baseUrl + "sendResetPasswordEmail", {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => {
    if (response.status === 200) {
      toast.success(
        <Translator
          getString={`E-mail to reset your password was sent to ${user.username}`}
        />
      );
    }
  });
};
