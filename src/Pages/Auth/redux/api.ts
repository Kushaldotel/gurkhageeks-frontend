import { axiosInstanceWithoutToken } from "@/Utils/axiosInstance";
import { AuthCredentialProps } from "./types";

// signup
export const Signup = (credentials: AuthCredentialProps) => {
  return axiosInstanceWithoutToken.post("/auth/register/", credentials);
};

// email verification
export const Verification = (body: { uidb: string; token: string }) => {
  const { uidb, token } = body;
  return axiosInstanceWithoutToken.post(`/auth/confirm/${uidb}/${token}`);
};

// login
export const Login = (credentials: AuthCredentialProps) => {
  return axiosInstanceWithoutToken.post("/auth/login/", credentials);
};
