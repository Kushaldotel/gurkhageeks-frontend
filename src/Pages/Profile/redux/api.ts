import { axiosInstance } from "@/Utils/axiosInstance"

// get profile
export const UserProfile = () =>{
  return axiosInstance.get('/accounts/userprofile/')
}