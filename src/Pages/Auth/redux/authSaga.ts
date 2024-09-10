import { call, put } from "redux-saga/effects";
import {
  loginFailure,
  loginSuccess,
  logoutFailure,
  logoutSuccess,
  orgRegisterFailure,
  orgRegisterSuccess,
  signupFailure,
  signupSuccess,
  verificationFailure,
  verificationSuccess,
} from "./authSlice";
import {
  Login,
  Logout,
  RegisterOrganization,
  Signup,
  Verification,
} from "./api";
import { AuthCredentialProps, OrganizationAuthProps } from "./types";
import { AxiosError } from "axios";
import { showToast } from "@/Global/globalAppSlice";
import { NavigateFunction } from "react-router-dom";

interface SignupAction {
  type: string;
  payload: {
    credentials: AuthCredentialProps;
    navigate: NavigateFunction;
  };
}

// signup saga
function* SignupSaga(action: SignupAction): Generator {
  try {
    const formData = new FormData();
    const { navigate } = action.payload;
    Object.entries(action.payload.credentials).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    // @ts-ignore
    const response: any = yield call(Signup, formData);

    yield put(signupSuccess());
    // Show success toast
    yield put(
      showToast({
        type: "success",
        title: "Success",
        message: response?.data?.data?.status?.message || "Signup successful!",
      })
    );

    // Navigate to /login
    navigate("/auth/verify");
  } catch (error) {
    yield put(signupFailure());
    if (error instanceof AxiosError) {
      yield put(
        showToast({
          type: "error",
          title: "Error",
          message: error.response?.data?.message || error.message,
        })
      );
    } else {
      yield put(
        showToast({
          type: "error",
          title: "Error",
          message: "An unknown error occurred during signup.",
        })
      );
    }
  }
}

// Email Verification
function* EmailVerificationSaga(action: {
  type: string;
  payload: {
    values: { uidb: string; token: string };
    navigate: NavigateFunction;
  };
}): Generator {
  try {
    const { values, navigate } = action.payload;
    // @ts-ignore
    const response: any = yield call(Verification, values);
    yield put(verificationSuccess(response.data));
    yield put(
      showToast({
        type: "success",
        title: "Success",
        message: response?.data?.message || "Verification successful!",
      })
    );
    navigate("/login");
  } catch (error) {
    yield put(verificationFailure());
    if (error instanceof AxiosError) {
      yield put(
        showToast({
          type: "error",
          title: "Error",
          message: error.response?.data?.message || error.message,
        })
      );
    } else {
      yield put(
        showToast({
          type: "error",
          title: "Error",
          message: "An unknown error occurred during verification.",
        })
      );
    }
  }
}
// login saga
function* LoginSaga(action: SignupAction): Generator {
  try {
    const { credentials, navigate } = action.payload;
    // @ts-ignore
    const response: any = yield call(Login, credentials);

    yield put(loginSuccess(response.data));

    yield put(
      showToast({
        type: "success",
        title: "Success",
        message: response?.data?.status?.message || "Login successful!",
      })
    );

    navigate("/");
  } catch (error) {
    yield put(loginFailure());
    if (error instanceof AxiosError) {
      yield put(
        showToast({
          type: "error",
          title: "Error",
          message: error.response?.data?.message || error.message,
        })
      );
    } else {
      yield put(
        showToast({
          type: "error",
          title: "Error",
          message: "An unknown error occurred during login.",
        })
      );
    }
  }
}

// organization registration
function* OrganizationRegistrationSaga(action: {
  type: string;
  payload: {
    credentials: OrganizationAuthProps;
    navigate: NavigateFunction;
  };
}): Generator {
  try {
    const formData = new FormData();
    const { navigate } = action.payload;
    Object.entries(action.payload.credentials).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    // @ts-ignore
    const response: any = yield call(RegisterOrganization, formData);

    yield put(orgRegisterSuccess());
    // Show success toast
    yield put(
      showToast({
        type: "success",
        title: "Success",
        message:
          response?.data?.data?.status?.message || "Registration successful!",
      })
    );

    // Navigate to /login
    navigate("/login");
  } catch (error) {
    yield put(orgRegisterFailure());
    if (error instanceof AxiosError) {
      yield put(
        showToast({
          type: "error",
          title: "Error",
          message: error.response?.data?.message || error.message,
        })
      );
    } else {
      yield put(
        showToast({
          type: "error",
          title: "Error",
          message: "An unknown error occurred during signup.",
        })
      );
    }
  }
}

// logout saga
function* LogoutSaga(action: {
  type: string;
  payload: { token: string; navigate: NavigateFunction };
}): Generator {
  try {
    const { token, navigate } = action.payload;

    const response = yield call(Logout, { refresh_token: token });
    if (response) {
      yield put(logoutSuccess());
      yield put(
        showToast({
          type: "success",
          title: "Success",
          message: "You have been logged out successfully.",
        })
      );
      navigate("/");
    }
  } catch (error) {
    yield put(logoutFailure());
    if (error instanceof AxiosError) {
      yield put(
        showToast({
          type: "error",
          title: "Error",
          message: error.response?.data?.message || error.message,
        })
      );
    } else {
      yield put(
        showToast({
          type: "error",
          title: "Error",
          message: "An unknown error occurred during logout.",
        })
      );
    }
  }
}
export {
  SignupSaga,
  LoginSaga,
  EmailVerificationSaga,
  LogoutSaga,
  OrganizationRegistrationSaga,
};
