export interface AuthCredentialProps{
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profile_pic?: string;
  bio?: string;
  website?: string;
  confirmPassword: string;
}

export interface AuthProps{
  loading: boolean;
}