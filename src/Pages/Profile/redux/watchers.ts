import { takeLatest } from "redux-saga/effects"
import { getUserDetailRequest } from "./profileSlice"
import { UserProfileSaga } from "./profileSaga"


function* profileWatchers(){
  yield takeLatest(getUserDetailRequest.type, UserProfileSaga)
}

export default profileWatchers