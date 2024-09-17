import { createSlice } from "@reduxjs/toolkit";
import { BlogStateProps } from "./types";

const initialState: BlogStateProps = {
  // blog categories
  categories: [],
  loadingCategories: false,
  // loading state for create blog
  loading: false,
  // blogs list
  blogs: [],
  loadingBlogs: false,
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

    // get blogs list
    getBlogsRequest(state) {
      state.loading = true;
    },
    getBlogsSuccess(state, action) {
      state.blogs = action.payload;
      state.loading = false;
    },
    getBlogsFailure(state, action) {
      state.loading = false;
    },

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

  // get blogs
  getBlogsRequest,
  getBlogsFailure,
  getBlogsSuccess,
} = blogSlice.actions;
export default blogSlice.reducer;
