import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import myReducer from "../reducers/MyReducer";
import productsReducer from "../reducers/productsReducer";
import logger from "redux-logger";
let combinedReducer = combineReducers({
  user: myReducer,
  products: productsReducer,
});

let store = legacy_createStore(combinedReducer, applyMiddleware(logger));

export default store;
