import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toastTitle: null,
  toastMessage: null,
  toastType: "success",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    // Toast actions
    showToast: (state, { payload }) => {
      state.toastMessage = payload.message;
      state.toastType = payload.type;
      state.toastTitle = payload.title;
    },
    clearToast: (state) => {
      state.toastMessage = null;
      state.toastTitle = null;
      state.toastType = "";
    },
  },
});

export const { showToast, clearToast } = globalSlice.actions;
export default globalSlice.reducer;
