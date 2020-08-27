import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/productsApi";
import { toast } from "react-toastify";

export function saveProductSuccess(goods) {
  return { type: actionTypes.SAVE_PRODUCT_SUCCESS, goods };
}

export function loadProductsSuccess(goods) {
  return { type: actionTypes.LOAD_PRODUCTS_SUCCESS, goods };
}

export function loadProducts() {
  return function (dispatch) {
    return webApi
      .getProducts()
      .then((goods) => {
        dispatch(loadProductsSuccess(goods));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveProduct(product) {
  return function (dispatch) {
    return webApi
      .saveProduct(product)
      .then(() => {
        dispatch(saveProductSuccess(product));
        toast.success("Product added successfully!");
      })
      .catch((error) => {
        toast.error("Product add failed!");
        throw error;
      });
  };
}
