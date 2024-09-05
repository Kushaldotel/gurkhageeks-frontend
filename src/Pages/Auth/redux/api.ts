import { axiosInstance } from "@/Utils/axiosInstance";
import { AuthCredentialProps } from "./types";
import { AxiosError } from "axios";

export const Signup = async (credentials: AuthCredentialProps) => {
  try {
    console.log(credentials, 'credentials')
    const response = await axiosInstance.post("/auth/register", credentials);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || error?.message);
    }
  }
};
