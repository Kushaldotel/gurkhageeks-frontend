import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {CommentState} from "./types"

const initialState:CommentState={
    blogPostId: null,
    comments: [],
    isExpanded: false,
    newComment: '',
    loading: false,
    error: null,
}

const commentSlice = createSlice({
    name:'comments',
    initialState,
    reducers:{
        setBlogPostId:(state, action:PayloadAction<number>)=>{
            state.blogPostId = action.payload;
        },
        toggleExpand:(state)=>{
            state.isExpanded = !state.isExpanded;
        },
        setNewComment:(state, action)=>{
            state.newComment = action.payload;
        },
        getCommentStart:(state, action: PayloadAction<number>)=>{
            state.loading = true;
            state.error = null;
        },
        getCommentSuccess:(state, action:PayloadAction<Comment[]>)=>{
            state.comments = action.payload;
            state.loading = false;
        },
        getCommentFailure:(state, action:PayloadAction<string>)=>{
            state.error = action.payload;
            state.loading = false;
        },
        addCommentStart:(state, aciton:PayloadAction<any>)=>{
            state.loading = true;
            state.error = null;
        },
        addCommentSuccess:(state, action:PayloadAction<Comment>)=>{
            state.comments.unshift(action.payload);
            state.newComment = '';
            state.loading = false;
        }, 
        addCommentFailure:(state, action:PayloadAction<string>)=>{
            state.loading = false;
            state.error = action.payload;
        },
    }
})


export const {
    // set the blog post id 
    setBlogPostId,
    
    toggleExpand, 
    setNewComment,
    //Add comments
    addCommentStart,
    addCommentSuccess,
    addCommentFailure,
    //Get comments 
    getCommentStart,
    getCommentSuccess,
    getCommentFailure,
 } = commentSlice.actions;

 export default commentSlice.reducer;