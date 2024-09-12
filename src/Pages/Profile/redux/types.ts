export interface UserProfileProps{
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  profile_pic: null;
  bio: string;
  website: string;
  total_blogs:string;
  blogs: string;
  total_project_showcase: string;
  project_showcase: string;
}


export interface ProfileSliceProps{
  userDetails: UserProfileProps | null;
  loading: boolean;
}