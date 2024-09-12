import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loadingCategories: false,
  loading: false, // tracks loading state of create blog
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
      console.log(payload, "categories failure");
      state.loadingCategories = false;
    },
    // get blog

    // post blog
    createBlogPostRequest: (state, action) => {
      state.loading = true;
    },
    createBlogPostSuccess: (state) => {
      state.loading = false;
    },
    createBlogPostFailure: (state) => {
      state.loading = false;
    },
    // update blog

    // delete blog
  },
});

export const {
  // get categories
  getCategoriesFailure,
  getCategoriesSuccess,
  getCategoriesRequest,
  // post blog
  createBlogPostFailure,
  createBlogPostRequest,
  createBlogPostSuccess,
} = blogSlice.actions;
export default blogSlice.reducer;
