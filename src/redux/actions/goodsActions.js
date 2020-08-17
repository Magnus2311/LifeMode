import * as actionTypes from "./actionTypes";

export function saveGoodsSuccess(goods) {
  return { type: "SAVE_GOODS_SUCCESS", goods };
}

export function loadGoodsSuccess(goods) {
  return { type: actionTypes.LOAD_GOODS_SUCCESS, goods };
}

export function loadGoods() {
  return function (dispatch) {
    return fetch("http://localhost:5000/api/goods")
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
    return fetch("http://localhost:5000/api/goods")
      .then((response) => {
        dispatch(saveGoodsSuccess(response));
      })
      .catch((error) => {
        throw error;
      });
  };
}
