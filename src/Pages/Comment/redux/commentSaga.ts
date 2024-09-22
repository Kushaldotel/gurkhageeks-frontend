import { call, put } from "redux-saga/effects";
import { addCommentFailure, addCommentSuccess, getCommentFailure, getCommentSuccess} from "./commentSlice";
import { addCommentApi, fetchCommentApi } from "./api";

function* fetchCommentsSaga(){
    try{
        const comments:Comment[] = yield call(fetchCommentApi)
        yield put(getCommentSuccess(comments))
    }catch(error){
        yield put(getCommentFailure(error.message))
    }
}


function* addCommentSaga(){
    try{
        const response:{data:Comment} = yield call (addCommentApi, action.payload.id, action.payload.comment);
        yield put(addCommentSuccess(response.data))
    }catch(error){
        yield put (addCommentFailure(error.message))
    }
}

