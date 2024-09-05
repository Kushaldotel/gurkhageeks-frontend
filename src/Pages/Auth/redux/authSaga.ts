import { call, put } from "redux-saga/effects";
import { signupFailure, signupSuccess } from "./authSlice";
import { Signup } from "./api";
import { AuthCredentialProps } from "./types";
import { AxiosError } from "axios";

// Type definition for saga action
interface SignupAction {
  type: string;
  payload: AuthCredentialProps;
}

// signup saga
function* SignupSaga(action: SignupAction): Generator {
  try {
    const response: any = yield call(Signup, action.payload);
    yield put(signupSuccess(response));
  } catch (error) {
    if (error instanceof AxiosError) {
      yield put(signupFailure(error.response?.data?.message || error.message));
    } else {
      yield put(signupFailure("An unknown error occurred during signup."));
    }
  }
}

export { SignupSaga };
