import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import reduxImmutableSsateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnchancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnchancers(applyMiddleware(thunk, reduxImmutableSsateInvariant()))
  );
}
