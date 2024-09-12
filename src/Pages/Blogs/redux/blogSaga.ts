import { call, put } from "redux-saga/effects";
import { getCategoriesFailure, getCategoriesSuccess } from "./blogSlice";
import { Categories } from "./api";

// get blog categories
function* CategoriesSaga(): Generator {
  try {
    const response: any = yield call(Categories);
    yield put(getCategoriesSuccess(response.data.data));
  } catch (error) {
    yield put(getCategoriesFailure(error));
  }
}

export { CategoriesSaga };
