import { createSlice } from "@reduxjs/toolkit";
import { AuthProps } from "./types";
import setCookie from "@/Utils/cookies/setCookie";
import deleteCookie from "@/Utils/cookies/deleteCookie";

const initialState: AuthProps = {
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // signup
    signupRequest: (state, action) => {
      state.loading = true;
    },
    signupSuccess: (state) => {
      state.loading = false;
    },
    signupFailure: (state) => {
      state.loading = false;
    },

    // email verfication
    verificationRequest: (state, action) => {
      state.loading = true;
    },
    verificationSuccess: (state, { payload }) => {
      state.loading = false;
    },
    verificationFailure: (state) => {
      state.loading = false;
    },

    // login
    loginRequest: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;

      // set accessToken, refreshToken
      setCookie("accessToken", payload?.data?.access, {
        secure: true,
        "max-age": 360000,
        sameSite: "Lax",
      });
      setCookie("refreshToken", payload?.data?.refresh, {
        secure: true,
        "max-age": 3600000,
        sameSite: "Lax",
      });
    },
    loginFailure: (state) => {
      state.loading = false;
    },

    // organization registration
    orgRegisterRequest: (state, action) => {
      state.loading = true;
    },
    orgRegisterSuccess: (state) => {
      state.loading = false;
    },
    orgRegisterFailure: (state) => {
      state.loading = false;
    },
    // logout
    logoutRequest: (state, action) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
    },
    logoutFailure: (state) => {
      state.loading = false;
    },
  },
});

export const {
  // signup
  signupFailure,
  signupRequest,
  signupSuccess,
  // email verifcation
  verificationFailure,
  verificationRequest,
  verificationSuccess,
  // login
  loginFailure,
  loginRequest,
  loginSuccess,
  // register organization
  orgRegisterFailure,
  orgRegisterRequest,
  orgRegisterSuccess,
  // logout
  logoutRequest,
  logoutFailure,
  logoutSuccess,
} = authSlice.actions;
export default authSlice.reducer;
