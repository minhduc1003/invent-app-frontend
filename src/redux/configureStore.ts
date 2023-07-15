import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const reducer = combineReducers({});
const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
});
export default store;
