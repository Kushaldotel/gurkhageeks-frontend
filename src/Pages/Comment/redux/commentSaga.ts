import { call, put } from "redux-saga/effects";
import { addLikes, createComments, getComments } from "./api";
import {
  createCommentFailure,
  createCommentSuccess,
  getCommentFailure,
  getCommentRequest,
  getCommentSuccess,
  postLikeFailure,
  postLikeSuccess,
} from "./commentSlice";
import { showToast } from "@/Global/globalAppSlice";
import { AxiosError } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* getCommentSaga(action: {
  type: string;
  payload: {
    id: number;
  };
}): Generator {
  try {
    const { id } = action.payload;
    const response: any = yield call(getComments, id);

    yield put(getCommentSuccess(response.data.data));
  } catch (error) {
    yield put(getCommentFailure());
  }
}

function* createCommentSaga(action: {
  type: string;
  payload: {
    values: {
      id: number;
      content: string;
    };
    resetForm: any;
  };
}): Generator {
  try {
    const { values, resetForm } = action.payload;

    const response = yield call(createComments, values);
    yield put(createCommentSuccess());
    resetForm();
    yield put(getCommentRequest({ id: values.id}))
    yield put(
      showToast({
        type: "success",
        title: "Success",
        message: "Comment Added",
      })
    );
  } catch (error) {
    yield put(createCommentFailure());
    if (error instanceof AxiosError) {
      yield put(
        showToast({
          type: "error",
          title: "Error",
          message: error.message,
        })
      );
    } else {
      yield put(
        showToast({
          type: "error",
          title: "Error",
          message: "An unknown error occurred during signup.",
        })
      );
    }
  }
}


// Sagas for like
function* postLikeSaga(action:{
  type:string,
  payload:{
    id:number,
    setIsLiked:any
  }
}){
  try{
    console.log(action.payload)
    const {id,setIsLiked} = action.payload;
    // console.log("ID is",  id)
    //@ts-ignore
    const response = yield call(addLikes, id )
    setIsLiked(true)
    yield put(showToast({type:'success', title:'success', message:response.message}))
    yield put(postLikeSuccess(response.data.data))

  }catch(error){
    yield put(showToast({type:'failure', title:'failure', message:"Error posting Like!"}))
    yield put(postLikeFailure())
  }
}

export { getCommentSaga, createCommentSaga, postLikeSaga };
