import { axiosInstance } from "@/Utils/axiosInstance"



// blog categories
export const Categories = () =>{
  return axiosInstance.get('/blog/categories/')
}

// create blog

// edit blog

// delete blog