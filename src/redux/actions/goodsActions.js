export function createGoods(goods) {
  return { type: "CREATE_GOODS", goods };
}

export function createGoodsSuccess(goods) {
  return { type: "CREATE_COURSE_SUCCESS", goods };
}

export function saveGoodsSuccess(goods) {
  return { type: "SAVE_GOODS_SUCCESS", goods };
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
