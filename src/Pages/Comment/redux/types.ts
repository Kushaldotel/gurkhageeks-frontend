export interface CommentProps {
  id: number;
  content: string;
  created_at: string;
  parent: any;
  replies: CommentProps[];
}

export interface CommentState {
  // likes
  likes: LikesProps | null;
  likeLoading: boolean;
  // get comments
  loadingComments: boolean;
  comments: Comment[];
  isExpanded: boolean;
  loading: boolean;
  blogPostId: number | null;
}


export interface LikesProps{
  total_like: number;
  total_dislike: number;
}