export interface BlogFormProps{
  title: string;
  content: string;
  thumbnail: null;
  tags: string[] | [];
  categories: number[];
  author?: number;
}

export interface BlogAuthorProps{
  id:number;
  first_name:string;
  last_name:string;
  profile_pic: null;

}

export interface BlogProps{
  id:number;
  thumbnail:string;
  title:string;
  content:string;
  categories:{name:string}[];
  tags:string;
  author:BlogAuthorProps;
  created_at:string;
  slug:string;
}

export interface CategoryProps{
  id:number;
  name:string;
}

export interface BlogStateProps{
  categories: CategoryProps[];
  loadingCategories: boolean;
  loading:boolean;
  blogs: BlogProps[];
  loadingBlogs: boolean;
  loadingBlogDetail: boolean;
  blogDetail: BlogProps | null;
  error:string | null;
}

