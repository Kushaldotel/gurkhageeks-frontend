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
    const formData = new FormData();

    Object.entries(action.payload).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    
    // @ts-ignore
    const response: any = yield call(Signup, formData);
    
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
