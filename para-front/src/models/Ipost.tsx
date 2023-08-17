import { PostTypeSelection } from './PostTypes';

export interface IPost {
    title: string;
    text: React.ReactNode;
    userImage?: string;
    userName: string;
    userTime: number;
    comments: number;
    likes: number;
    views: number;
    imagePost: string;
    typePost: PostTypeSelection;
  }