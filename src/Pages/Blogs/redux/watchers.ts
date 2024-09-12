import { takeLatest } from "redux-saga/effects";
import { getCategoriesRequest } from "./blogSlice";
import { CategoriesSaga } from "./blogSaga";

function* blogWatcherSaga() {
  yield takeLatest(getCategoriesRequest.type, CategoriesSaga);
}

export default blogWatcherSaga;
