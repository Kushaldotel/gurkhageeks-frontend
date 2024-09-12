import { call, put } from "redux-saga/effects";
import { getUserDetailFailure, getUserDetailSuccess } from "./profileSlice";
import { UserProfile } from "./api";

// fetch user profile
function* UserProfileSaga(): Generator {
  try {
    const response: any = yield call(UserProfile);
    yield put(getUserDetailSuccess(response.data));
  } catch (error) {
    yield put(getUserDetailFailure());
  }
}

export { UserProfileSaga };
