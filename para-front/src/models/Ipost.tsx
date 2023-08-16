export interface Ipost {
    title: string;
    text: React.ReactNode;
    userImage?: string;
    userName: string;
    userTime: string;
    comments: number;
    likes: number;
    views: number;
    imagePost: string;
  }