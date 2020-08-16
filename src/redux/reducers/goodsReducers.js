import * as actionTypes from "../actions/actionTypes";

export default function goodsReducer(goods = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_GOODS_SUCCESS:
      return action.LOAD_GOODS_SUCCESS;
    default:
      return goods;
  }
}
