import { axiosInstance } from "@/Utils/axiosInstance"
import { BlogFormProps } from "./types"



// blog categories
export const Categories = () =>{
  return axiosInstance.get('/blog/categories/')
}

// get blog 
export const getBlogs = (value:{category:string}) =>{
  return axiosInstance.get(`/blog/?categories=${value.category}`)
}

// get blog detail 
export const getBlogDetail = (slug:string) =>{
  return axiosInstance.get(`/blog/${slug}/`)
}

// create blog
export const CreateBlog = (body: BlogFormProps) =>{
  return axiosInstance.post('/blog/', body)
}


// get latest blog 
export const LatestBlog = () =>{
  return axiosInstance.get('/blog/recentposts/')
}

// edit blog

// delete blog