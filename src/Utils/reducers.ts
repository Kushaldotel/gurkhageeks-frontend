import { combineReducers } from "@reduxjs/toolkit";
import GlobalReducer from "@/Global/globalAppSlice";
import AuthReducer from "@/Pages/Auth/redux/authSlice";

export const rootReducer = combineReducers({
  global: GlobalReducer,
  auth: AuthReducer,
});
