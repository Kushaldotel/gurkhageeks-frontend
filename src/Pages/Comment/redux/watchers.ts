import { takeLatest } from "redux-saga/effects";
import { createCommentRequest, getCommentRequest } from "./commentSlice";
import { createCommentSaga, getCommentSaga } from "./commentSaga";

function* commentWatcherSaga(){
  yield takeLatest(getCommentRequest.type, getCommentSaga)
  yield takeLatest(createCommentRequest.type, createCommentSaga)
}
export default commentWatcherSaga;
