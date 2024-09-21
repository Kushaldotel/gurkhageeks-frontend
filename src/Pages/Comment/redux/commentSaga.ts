import { call, put } from "redux-saga/effects";
import { fetchCommentFailure, fetchCommentSuccess } from "./commentSlice";
import { commentApi } from "./api";

function* fetchCommentSaga(){
    try{
        const comments:Comment[] = yield call(fetchCommentApi)
        yield put(fetchCommentSuccess(comments))
    }catch(error){
        yield put(fetchCommentFailure(error.message))
    }
}