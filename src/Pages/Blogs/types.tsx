export interface Blog {
    id: number;
    title: string;
    content: string;
    thumbnail: string;
    tags: string;
    categories: Category[];
    authorName: string;
    created_at: string;
  }
  
  export interface Category {
    id: number;
    name: string;
  }
  
  export interface RootState {
    blogs: Blog[];
    categories: Category[];
    loading: boolean;
    currentLayout: 'horizontal' | 'card';
    currentCategory: number | null;
  }