export interface RoadmapImageProps {
  image: string;
  image_no: number;
}

export interface RoadmapProps {
  title: string;
  description: string;
  steps: string;
  resource_url: string;
  images: RoadmapImageProps[];
}


export interface RoadmapStateProps{
  loadingList: boolean;
  list: RoadmapProps[];
  loading: boolean;
  details: RoadmapProps | null;
}