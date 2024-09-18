import { takeLatest } from "redux-saga/effects";
import { createBlogPostRequest, getBlogDetailRequest, getBlogsRequest, getCategoriesRequest } from "./blogSlice";
import { BlogDetailSaga, BlogsSaga, CategoriesSaga, CreateBlogSaga } from "./blogSaga";

function* blogWatcherSaga() {
  yield takeLatest(getCategoriesRequest.type, CategoriesSaga);
  yield takeLatest(createBlogPostRequest.type, CreateBlogSaga);
  yield takeLatest(getBlogsRequest.type, BlogsSaga)
  yield takeLatest(getBlogDetailRequest.type, BlogDetailSaga)
}

export default blogWatcherSaga;
