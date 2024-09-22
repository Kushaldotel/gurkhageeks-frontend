import { call, put } from "redux-saga/effects";
import { createComments, getComments } from "./api";
import {
  createCommentFailure,
  createCommentSuccess,
  getCommentFailure,
  getCommentSuccess,
} from "./commentSlice";
import { showToast } from "@/Global/globalAppSlice";
import { AxiosError } from "axios";

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

export { getCommentSaga, createCommentSaga };
