import { takeLatest } from "redux-saga/effects";
import { createBlogPostRequest, getBlogDetailRequest, getBlogsRequest, getCategoriesRequest, getLatestBlogRequest } from "./blogSlice";
import { BlogDetailSaga, BlogsSaga, CategoriesSaga, CreateBlogSaga, LatestBlogSaga } from "./blogSaga";

function* blogWatcherSaga() {
  yield takeLatest(getCategoriesRequest.type, CategoriesSaga);
  yield takeLatest(createBlogPostRequest.type, CreateBlogSaga);
  yield takeLatest(getBlogsRequest.type, BlogsSaga)
  yield takeLatest(getBlogDetailRequest.type, BlogDetailSaga);
  yield takeLatest(getLatestBlogRequest.type, LatestBlogSaga);
}

export default blogWatcherSaga;
