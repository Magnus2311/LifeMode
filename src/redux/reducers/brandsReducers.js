import * as actionTypes from "../actions/actionTypes";

export default function brandsReducers(brands = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_BRANDS_SUCCESS:
      return action.brands;
    default:
      return brands;
  }
}
