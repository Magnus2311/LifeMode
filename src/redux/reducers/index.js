import { combineReducers } from "redux";

import goods from "./goodsReducers";

const rootReducer = combineReducers({
  goods,
});

export default rootReducer;
