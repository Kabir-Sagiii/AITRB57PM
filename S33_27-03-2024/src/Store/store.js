import { legacy_createStore } from "redux";
import myReducer from "../reducers/MyReducer";

let store = legacy_createStore(myReducer);

export default store;
