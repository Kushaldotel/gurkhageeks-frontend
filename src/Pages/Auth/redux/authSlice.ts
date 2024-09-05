import { createSlice } from "@reduxjs/toolkit";
import { AuthProps } from "./types";

const initialState: AuthProps = {
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupRequest: (state) => {
      state.loading = true;
    },
    signupSuccess: (state) => {
      state.loading = false;
    },
    signupFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { signupFailure, signupRequest, signupSuccess } =
  authSlice.actions;
export default authSlice.reducer;
