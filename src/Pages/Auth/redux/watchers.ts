import { takeLatest } from "redux-saga/effects";
import { loginRequest, signupRequest, verificationRequest } from "./authSlice";
import { EmailVerificationSaga, LoginSaga, SignupSaga } from "./authSaga";

function* authWatcherSaga() {
  yield takeLatest(signupRequest.type, SignupSaga);
  yield takeLatest(loginRequest.type, LoginSaga);
  yield takeLatest(verificationRequest.type, EmailVerificationSaga)
}

export default authWatcherSaga;
