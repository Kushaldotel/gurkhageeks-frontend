export interface CommentProps {
  id: number;
  content: string;
  created_at: string;
  parent: any;
  replies: CommentProps[];
}

export interface CommentState {
  // get comments
  loadingComments: boolean;
  comments: Comment[];
  isExpanded: boolean;
  loading: boolean;
  blogPostId: number | null;
}
