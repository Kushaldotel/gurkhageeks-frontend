import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loadingCategories: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    // get categories
    getCategoriesRequest: (state) => {
      state.loadingCategories = true;
    },
    getCategoriesSuccess: (state, { payload }) => {
      state.loadingCategories = false;
      state.categories = payload;
    },
    getCategoriesFailure: (state, { payload }) => {
      console.log(payload, 'categories failure')
      state.loadingCategories = false;
    },
  },
});

export const {
  // get categories
  getCategoriesFailure,
  getCategoriesSuccess,
  getCategoriesRequest,
} = blogSlice.actions;
export default blogSlice.reducer;
