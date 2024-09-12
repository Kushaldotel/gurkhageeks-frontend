import { combineReducers } from "@reduxjs/toolkit";
import GlobalReducer from "@/Global/globalAppSlice";
import AuthReducer from "@/Pages/Auth/redux/authSlice";
import BlogReducer from "@/Pages/Blogs/redux/blogSlice";
export const rootReducer = combineReducers({
  global: GlobalReducer,
  auth: AuthReducer,
  blog: BlogReducer,
});
