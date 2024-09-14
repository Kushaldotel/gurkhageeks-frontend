import { Blog, Category } from "./types";

// export const FETCH_BLOGS = 'FETCH_BLOGS';
// export const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
// export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
// export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
// export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
// export const SET_CURRENT_LAYOUT = 'SET_CURRENT_LAYOUT';

// export const fetchBlogs = () => ({ type: FETCH_BLOGS });
// export const fetchBlogsSuccess = (blogs: Blog[]) => ({ type: FETCH_BLOGS_SUCCESS, payload: blogs });
// export const fetchCategories = () => ({ type: FETCH_CATEGORIES });
// export const fetchCategoriesSuccess = (categories: Category[]) => ({ type: FETCH_CATEGORIES_SUCCESS, payload: categories });
// export const setCurrentCategory = (categoryId: number | null) => ({ type: SET_CURRENT_CATEGORY, payload: categoryId });
// export const setCurrentLayout = (layout: 'horizontal' | 'card') => ({ type: SET_CURRENT_LAYOUT, payload: layout });

export const FETCH_BLOG_REQUEST = "FETCH_BLOG_REQUEST";
export const FETCH_BLOG_SUCCESS = "FETCH_BLOG_SUCCESS";
export const FETCH_BLOG_FAILURE = "FETCH_BLOG_FAILURE";
export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_BLOG_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

export const fetchBlogRequest = (categoryId) => ({
  type: FETCH_BLOG_REQUEST,
  paylaod: categoryId,
});

export const fetchBlogSuccess = (blogs) => ({
  type: FETCH_BLOG_REQUEST,
  payload: blogs,
});

export const fetchBlogFailure = (error) => ({
  type: FETCH_BLOG_REQUEST,
  payload: error,
});


export const fetchCategoriesRequest = () =>({
    type:FETCH_CATEGORIES_REQUEST,
})

export const fetchCategoriesSuccess = (categories) =>({
    type:FETCH_CATEGORIES_SUCCESS,
    payload:categories,
})


export const fetchCategoriesFailure = (error) =>({
    type: FETCH_CATEGORIES_FAILURE,
    payload: error,

})