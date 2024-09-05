import { takeLatest } from "redux-saga/effects";
import { signupRequest } from "./authSlice";
import { SignupSaga } from "./authSaga";


function* authWatcherSaga(){
  yield takeLatest(signupRequest.type, SignupSaga)
}

export default authWatcherSaga