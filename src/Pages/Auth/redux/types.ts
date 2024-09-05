export interface AuthCredentialProps{
  first_name: string;
  last_name: string;
  email: string;
  profile_pic: null;
  bio: string | null;
  website: string | null;
  password: string;
  confirmPassword: string;
}

export interface AuthProps{
  loading: boolean;
  error: null;
}