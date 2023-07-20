import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { globalSlice } from "./globleSlice";

const reducer = combineReducers({
  global: globalSlice.reducer,
});
const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
});
export default store;
