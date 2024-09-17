import { takeLatest } from "redux-saga/effects";
import { createBlogPostRequest, getBlogsRequest, getCategoriesRequest } from "./blogSlice";
import { BlogsSaga, CategoriesSaga, CreateBlogSaga } from "./blogSaga";

function* blogWatcherSaga() {
  yield takeLatest(getCategoriesRequest.type, CategoriesSaga);
  yield takeLatest(createBlogPostRequest.type, CreateBlogSaga);
  yield takeLatest(getBlogsRequest.type, BlogsSaga)
}

export default blogWatcherSaga;
