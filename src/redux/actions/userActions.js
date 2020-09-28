import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/userApi";
import { toast } from "react-toastify";

export function loginUserSuccess(user) {
  return { type: actionTypes.LOGIN_USER_SUCCESS, user };
}

export function loginUser(user) {
  return function (dispatch) {
    return webApi
      .loginUser(user)
      .then(() => {
        dispatch(loginUserSuccess(user));
        toast.success("User successfully login");
      })
      .catch((error) => {
        toast.error("User login failed");
        throw error;
      });
  };
}
