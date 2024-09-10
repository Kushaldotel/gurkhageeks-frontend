import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function* fetchBlogs() {
  try {
    const response = yield call(fetch, `${BASE_URL}/blog/`);
    const result = yield response.json();
    if (result.success && Array.isArray(result.data)) {
      yield put(actions.fetchBlogsSuccess(result.data));
    }
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
}

function* fetchCategories() {
  try {
    const response = yield call(fetch, `${BASE_URL}/blog/categories/`);
    const result = yield response.json();
    if (Array.isArray(result.data)) {
      yield put(actions.fetchCategoriesSuccess(result.data));
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

export function* rootSaga() {
  yield takeLatest(actions.FETCH_BLOGS, fetchBlogs);
  yield takeLatest(actions.FETCH_CATEGORIES, fetchCategories);
}