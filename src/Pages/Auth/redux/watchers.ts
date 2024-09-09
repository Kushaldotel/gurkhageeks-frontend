import { takeLatest } from "redux-saga/effects";
import { loginRequest, logoutRequest, signupRequest, verificationRequest } from "./authSlice";
import { EmailVerificationSaga, LoginSaga, LogoutSaga, SignupSaga } from "./authSaga";

function* authWatcherSaga() {
  yield takeLatest(signupRequest.type, SignupSaga);
  yield takeLatest(loginRequest.type, LoginSaga);
  yield takeLatest(verificationRequest.type, EmailVerificationSaga)
  yield takeLatest(logoutRequest.type, LogoutSaga)
}

export default authWatcherSaga;
