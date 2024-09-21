import { axiosInstance } from "@/Utils/axiosInstance"

export const fetchCommentApi = (id:number) =>{
    return axiosInstance.get(`/blog/comments/${id}/`)
  }

//Fetch comments 
export const addCommentApi = () =>{
    return axiosInstance.post('/blog/', body)
  }
  