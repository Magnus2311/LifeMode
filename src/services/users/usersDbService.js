import React from "react";
import { toast } from "react-toastify";
import { get, handleError, post } from "../../api/apiUtils";
import { Translator } from "../languages/Laguage";
const baseUrl = "/api/users/";

export function add(user) {
  post(baseUrl + "add", user);
}

export function login(user) {
  return post(baseUrl + "login", user)
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
    .catch(handleError);
}

export function changePassword(oldPassword, newPassword) {
  return post(baseUrl + "changePassword", { oldPassword, newPassword })
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
        toast.success(<Translator getString="Password changed successfully" />);
      else
        toast.error(
          <Translator getString="Password was not changed! Try again later" />
        );
      return loginResponse.isSuccessful;
    })
    .catch(handleError);
}

export function refreshAccessToken() {
  return get(baseUrl + "getAccessToken")
    .then(async (response) => {
      var isSuccessful = response.status === 200;
      var loginResponse = {
        isSuccessful: isSuccessful,
        token: JSON.parse(await response.text()),
      };
      return loginResponse;
    })
    .catch(handleError)
    .then((loginResponse) => loginResponse);
}
