import { axiosInstanceWithoutToken } from "@/Utils/axiosInstance"


// roadmap list
export const RoadmapList = () =>{
  return axiosInstanceWithoutToken.get('/roadmaps/list/')
}

// roadmap details
export const RoadmapDetail = (id: string) =>{
  return axiosInstanceWithoutToken.get(`/roadmaps/${id}/`)
}