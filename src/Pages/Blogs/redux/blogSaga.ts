import { call, put } from "redux-saga/effects";
import {
  createBlogPostFailure,
  createBlogPostSuccess,
  getBlogsFailure,
  getBlogsSuccess,
  getCategoriesFailure,
  getCategoriesSuccess,
  getBlogDetailRequest,
  getBlogDetailSuccess,
  getBlogDetailFailure
} from "./blogSlice";

import { Categories, CreateBlog, getBlogs,getBlogDetail } from "./api";
import { AxiosError } from "axios";
import { showToast } from "@/Global/globalAppSlice";
import { BlogFormProps } from "./types";
import { NavigateFunction } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

// get blog categories
function* CategoriesSaga(): Generator {
  try {
    const response: any = yield call(Categories);
    yield put(getCategoriesSuccess(response.data.data));
  } catch (error) {
    yield put(getCategoriesFailure(error));
  }
}

function* BlogDetailSaga(action:{payload:string}):Generator{
  try{
    const response: any = yield call(getBlogDetail, action.payload)
    yield put(getBlogDetailSuccess(response.data.data))
  }catch(error){
    yield put(getBlogDetailFailure(error))
  }
}


//get all blogs
function* BlogsSaga(action:{
  type:string,
  payload:{
    category:string,
  }
} ):Generator{
  try{
    const {category} = action.payload;

    const response:any = yield call(getBlogs, {category})
    yield put(getBlogsSuccess(response.data.data))
  }catch(error){
    yield put(getBlogsFailure(error))
  }
}

// create blog
function* CreateBlogSaga(action: {
  type: string;
  payload: {
    data: BlogFormProps;
    navigate: NavigateFunction;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    resetForm: any;
  };
}): Generator {
  try {
    const { data, setShowModal, resetForm } = action.payload;
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    // @ts-ignore
    const response: any = yield call(CreateBlog, formData);
    resetForm()
    setShowModal(false);
    yield put(
      showToast({
        type: "success",
        title: "Success",
        message: response?.data?.data?.status?.message || "Post Successfully!",
      })
    );
    yield put(createBlogPostSuccess())
  } catch (error) {
    yield put(createBlogPostFailure());
    if (error instanceof AxiosError) {
      yield put(
        showToast({
          type: "error",
          title: "Error",
          message: error.response?.data?.message || error.message,
        })
      );
    } else {
      yield put(
        showToast({
          type: "error",
          title: "Error",
          message: "An unknown error occurred during logout.",
        })
      );
    }
  }
}
export { CategoriesSaga, CreateBlogSaga, BlogsSaga, BlogDetailSaga }; 



