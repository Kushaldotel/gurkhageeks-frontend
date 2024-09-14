export interface BlogFormProps{
  title: string;
  content: string;
  thumbnail: null;
  tags: string[] | [];
  categories: number[];
  author?: number;
}
