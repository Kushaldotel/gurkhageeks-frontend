import { axiosInstance } from "@/Utils/axiosInstance";

// Fetch comments
export const getComments = (id: number) => {
  return axiosInstance.get(`/blog/posts/${id}/comments/`);
};

// Add comments
export const createComments = (body: { id: number; content: string }) => {
  const { id } = body;
  return axiosInstance.post(`/blog/posts/${id}/comments/`, body);
};
