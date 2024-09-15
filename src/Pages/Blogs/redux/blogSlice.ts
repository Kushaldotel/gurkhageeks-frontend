import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  blogs:[],
  error:null,
  currentLayout:'horizental',
  selectedCategory:'all',
  categories: [],
  loadingCategories: false,
  loading: false, // tracks loading state of create blog
};

// const initialState:BlogState{

// }

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
    getBlogsStart(state){
      state.loading = true;
      state.error = null;
    },
    getBlogsSuccess(state, action){
      state.blogs = action.payload;
      state.loading = false;
    },
    getBlogsFailure(state, action){
      state.error = action.payload;
      state.loading = false;
    },
    getSelectedCategory(state, action){
      state.selectedCategory = action.payload;
    },
    getCurrentLayout(state, action){
      state.currentLayout = action.payload;
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
  getBlogsStart,
  getBlogsFailure,
  getBlogsSuccess,
  getSelectedCategory,
  getCurrentLayout,
  
} = blogSlice.actions;
export default blogSlice.reducer;
