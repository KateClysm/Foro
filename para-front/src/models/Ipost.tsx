import { PostTypeSelection } from './PostTypes';

export interface IPost {
    title: string;
    text: React.ReactNode;
    imagePost?: string;
    typePost: PostTypeSelection;

    userImage?: string;
    userName: string;
    userTime: number;


    comments: number;
    likes: number;
    views: number;
   
  }