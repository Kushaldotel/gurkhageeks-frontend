import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {CommentState} from "./types"

const initialState:CommentState={
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
        toggleExpand:(state)=>{
            state.isExpanded = !state.isExpanded;
        },
        setNewComment:(state, action)=>{
            state.newComment = action.payload;
        },
        addComment:(state, action:PayloadAction<Comment>)=>{
            state.comments.unshift(action.payload);
        }, 
        fetchCommentStart:(state)=>{
            state.loading = true;
            state.error = null;
        },
        fetchCommentSuccess:(state, action:PayloadAction<Comment[]>)=>{
            state.comments = action.payload;
            state.loading = false;
        },
        fetchCommentFailure:(state, action:PayloadAction<string>)=>{
            state.error = action.payload;
            state.loading = false;

        }
    }
})


export const {
    toggleExpand, 
    setNewComment,
    addComment,
    fetchCommentStart,
    fetchCommentSuccess,
    fetchCommentFailure,
 } = commentSlice.actions;

 export default commentSlice.reducer;