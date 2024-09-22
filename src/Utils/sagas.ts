import authWatcherSaga from "@/Pages/Auth/redux/watchers";
import blogWatcherSaga from "@/Pages/Blogs/redux/watchers";
import commentWatcherSaga from "@/Pages/Comment/redux/watchers";
import profileWatchers from "@/Pages/Profile/redux/watchers";
import roadmapWatcherSage from "@/Pages/Roadmaps/redux/watchers";
import { all } from "redux-saga/effects";

// Combine all sagas
export default function* rootSaga() {
  yield all([
    authWatcherSaga(), 
    blogWatcherSaga(),
    profileWatchers(),
    roadmapWatcherSage(),
    commentWatcherSaga(),
  ]);
}
