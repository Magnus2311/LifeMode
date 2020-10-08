import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/productsApi";
import { toast } from "react-toastify";

export function saveProductSuccess(products) {
  return { type: actionTypes.SAVE_PRODUCT_SUCCESS, products };
}

export function loadProductsSuccess(products) {
  return { type: actionTypes.LOAD_PRODUCTS_SUCCESS, products };
}

export function loadProducts() {
  return function (dispatch) {
    dispatch({ type: actionTypes.REQUEST_LOAD_PRODUCTS });
    return webApi
      .getProducts()
      .then((products) => {
        dispatch(loadProductsSuccess(products));
        dispatch({ type: actionTypes.REQUEST_LOAD_PRODUCTS_SUCCESS });
      })
      .catch((error) => {
        toast.error("Loading products failed!");
        dispatch({ type: actionTypes.REQUEST_LOAD_PRODUCTS_SUCCESS });
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
