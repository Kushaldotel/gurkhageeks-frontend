import { combineReducers } from "@reduxjs/toolkit";
import GlobalReducer from "@/Global/globalAppSlice";
import AuthReducer from "@/Pages/Auth/redux/authSlice";
import BlogReducer from "@/Pages/Blogs/redux/blogSlice";
import ProfileReducer from "@/Pages/Profile/redux/profileSlice";
import RoadmapReducer from "@/Pages/Roadmaps/redux/roadmapSlice";

export const rootReducer = combineReducers({
  global: GlobalReducer,
  auth: AuthReducer,
  blog: BlogReducer,
  profile: ProfileReducer,
  roadmap: RoadmapReducer,
});
