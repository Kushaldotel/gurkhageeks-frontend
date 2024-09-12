import { takeLatest } from "redux-saga/effects";
import { createBlogPostRequest, getCategoriesRequest } from "./blogSlice";
import { CategoriesSaga, CreateBlogSaga } from "./blogSaga";

function* blogWatcherSaga() {
  yield takeLatest(getCategoriesRequest.type, CategoriesSaga);
  yield takeLatest(createBlogPostRequest.type, CreateBlogSaga);
}

export default blogWatcherSaga;
