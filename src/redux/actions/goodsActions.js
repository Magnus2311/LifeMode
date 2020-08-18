import * as actionTypes from "./actionTypes";
import * as webApi from "../../api/goodsApi";

export function saveGoodsSuccess(goods) {
  return { type: actionTypes.SAVE_GOODS_SUCCESS, goods };
}

export function loadGoodsSuccess(goods) {
  return { type: actionTypes.LOAD_GOODS_SUCCESS, goods };
}

export function loadGoods() {
  return function (dispatch) {
    return webApi
      .getGoods()
      .then((goods) => {
        dispatch(loadGoodsSuccess(goods));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveGoods(goods) {
  return function (dispatch) {
    return webApi
      .saveGoods(goods)
      .then(() => {
        dispatch(saveGoodsSuccess(goods));
      })
      .catch((error) => {
        throw error;
      });
  };
}
