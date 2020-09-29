import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/productsApi";
import { toast } from "react-toastify";
import * as cacheService from "../../services/caching/cacheData";

export function saveProductSuccess(products) {
  return { type: actionTypes.SAVE_PRODUCT_SUCCESS, products };
}

export function loadProductsSuccess(products) {
  return { type: actionTypes.LOAD_PRODUCTS_SUCCESS, products };
}

export function loadProducts() {
  return function (dispatch) {
    var products = cacheService.getWithExpiry("products");
    return products
      ? products
      : webApi
          .getProducts()
          .then((products) => {
            dispatch(loadProductsSuccess(products));
          })
          .catch((error) => {
            throw error;
          });
  };
}

export function saveProduct(product) {
  return function (dispatch) {
    debugger;
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
