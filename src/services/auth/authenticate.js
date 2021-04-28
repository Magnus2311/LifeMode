import React from "react";
import { toast } from "react-toastify";
import { Translator } from "../languages/Laguage";

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

  toast.success(<Translator getString="Signed out successfully" />);
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
