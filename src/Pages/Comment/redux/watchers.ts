import { takeLatest } from "redux-saga/effects";
import { createCommentRequest, getCommentRequest, postLikeRequest } from "./commentSlice";
import { createCommentSaga, getCommentSaga, postLikeSaga } from "./commentSaga";

function* commentWatcherSaga(){
  yield takeLatest(getCommentRequest.type, getCommentSaga)
  yield takeLatest(createCommentRequest.type, createCommentSaga)
  yield takeLatest(postLikeRequest.type, postLikeSaga)
}
export default commentWatcherSaga;
