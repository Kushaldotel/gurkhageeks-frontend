import { axiosInstance } from "@/Utils/axiosInstance"
import { BlogFormProps } from "./types"



// blog categories
export const Categories = () =>{
  return axiosInstance.get('/blog/categories/')
}

// get blog 
export const blogs = () =>{
  return axiosInstance.get('/blog/')
}


// create blog
export const CreateBlog = (body: BlogFormProps) =>{
  return axiosInstance.post('/blog/', body)
}


// edit blog

// delete blog