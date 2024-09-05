import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "@/Pages/Auth/redux/authSlice";

export const rootReducer = combineReducers({
  auth: AuthReducer
});
