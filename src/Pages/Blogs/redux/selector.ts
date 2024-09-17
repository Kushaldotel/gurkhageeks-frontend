import { RootState } from "@/store/store";

export const blogSelector = (state: RootState) => state.blog;

export const selectBlogs = (state:RootState) =>state.blog.blogs;

export const selectCategories = (state:RootState) => state.blog.categories;

export const selectLoading = (state:RootState) => state.blog.loading;

export const error = (state:RootState) =>state.blog.error;

export const selectCurrentlayout = (state:RootState) =>state.blog.currentLayout;

export const selectSelectedCategory = (state:RootState)=>state.blog.selectedCategory;




