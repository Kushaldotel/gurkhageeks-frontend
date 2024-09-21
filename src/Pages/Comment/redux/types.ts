export type Comment = {
    id:number;
    author:string;
    avatar:string;
    content:string;
    likes:number;
    dislike:number;
    timestamp:string;
}


export interface CommentState{
    comments:Comment[];
    isExpanded:boolean;
    newComment:string;
    loading:boolean;
    error:string | null;
}


