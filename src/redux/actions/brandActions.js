import * as actionTypes from "../actions/actionTypes";
import * as webApi from "../../api/shopApi";
import { toast } from "react-toastify";

export function loadBrands() {
  return function (dispatch) {
    debugger;
    return webApi
      .getBrands()
      .then((brands) => {
        dispatch(loadBrandsSuccess(brands));
      })
      .catch((error) => {
        toast.error("Loadi  ng brands failed!");
        throw error;
      });
  };
}

export function loadBrandsSuccess(brands) {
  return {
    type: actionTypes.LOAD_BRANDS_SUCCESS,
    brands,
  };
}
