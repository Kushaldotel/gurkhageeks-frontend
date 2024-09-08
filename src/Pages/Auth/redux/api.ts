import { axiosInstance } from "@/Utils/axiosInstance";
import { AuthCredentialProps } from "./types";

export const Signup = (credentials: AuthCredentialProps) => {
  return axiosInstance.post("/auth/register/", credentials);
};
