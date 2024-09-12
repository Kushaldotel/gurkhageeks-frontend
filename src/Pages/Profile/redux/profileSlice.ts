import { createSlice } from "@reduxjs/toolkit";
import { ProfileSliceProps } from "./types";

const initialState: ProfileSliceProps = {
  loading: false,
  userDetails: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // fetch user details
    getUserDetailRequest: (state) => {
      state.loading = true;
    },
    getUserDetailSuccess: (state, { payload }) => {
      state.loading = false;
      state.userDetails = payload.data[0];
    },
    getUserDetailFailure: (state) => {
      state.loading = false;
    },
  },
});

export const {
  // get user details
  getUserDetailFailure,
  getUserDetailRequest,
  getUserDetailSuccess,
} = profileSlice.actions;
export default profileSlice.reducer;
