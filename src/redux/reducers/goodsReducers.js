import * as actionTypes from "../actions/actionTypes";

export default function goodsReducer(goods = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_GOODS_SUCCESS:
      return action.goods;
    case actionTypes.SAVE_GOODS_SUCCESS:
      return [...goods, { ...action.goods }];
    default:
      return goods;
  }
}
