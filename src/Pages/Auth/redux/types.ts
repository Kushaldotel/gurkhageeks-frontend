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

export interface OrganizationAuthProps{
  organisation_name: string;
  email: string;
  phone_number: string;
  password: string;
  confirmPassword: string;
  logo?: null;
  website: string;
  address: string;
  description: string;
}
export interface AuthProps{
  loading: boolean;
}