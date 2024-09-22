import { axiosInstance } from "@/Utils/axiosInstance"


// Fetch comments 
export const fetchCommentApi = (id:number) =>{
    return axiosInstance.get(`/blog/comments/${id}/`)
}

// Add comments
export const addCommentApi = (id:number) =>{
    return axiosInstance.post(`/blog/comments/${id}`)
}
  