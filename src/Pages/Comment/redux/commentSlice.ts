import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CommentState } from "./types";

const initialState: CommentState = {
  blogPostId: null,
  //post like
  likes: null,
  likeLoading: false,
  // get comment
  loadingComments: false,
  comments: [],
  isExpanded: false,
  loading: false, // this tracks the create comment loading progress
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setBlogPostId: (state, { payload }) => {
      state.blogPostId = payload;
    },
    toggleExpand: (state) => {
      state.isExpanded = !state.isExpanded;
    },
    // get comments
    getCommentRequest: (state, action) => {
      state.loadingComments = true;
    },
    getCommentSuccess: (state, { payload }) => {
      state.loadingComments = false;
      state.comments = payload
    },
    getCommentFailure: (state) => {
      state.loadingComments = false;
    },

    // create comments
    createCommentRequest: (state, action) => {
      state.loading = true;
    },
    createCommentSuccess: (state) => {
      state.loading = false;
    },
    createCommentFailure: (state) => {
      state.loading = false;
    },

    // add likes 
    postLikeRequest:(state, action) =>{
      state.likeLoading = true;
    }, 
    postLikeSuccess:(state, {payload})=>{
      state.likeLoading= false;
      state.likes = payload;
    },
    postLikeFailure:(state) =>{
      state.likeLoading = false;
    }
  },
});

export const {
  // set the blog post id
  setBlogPostId,
  toggleExpand,
  //Add comments
  createCommentRequest,
  createCommentSuccess,
  createCommentFailure,
  //Get comments
  getCommentRequest,
  getCommentSuccess,
  getCommentFailure,

  // post like 
  postLikeFailure,
  postLikeRequest,
  postLikeSuccess,
} = commentSlice.actions;

export default commentSlice.reducer;
