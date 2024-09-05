import authWatcherSaga from "@/Pages/Auth/redux/watchers";
import { all } from "redux-saga/effects";

// Combine all sagas
export default function* rootSaga() {
  yield all([
    authWatcherSaga(), 
  ]);
}
