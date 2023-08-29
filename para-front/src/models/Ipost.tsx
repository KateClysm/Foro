import { PostTypeSelection } from './PostTypes';

export interface Post {
  title: string;
  text: React.ReactNode;
  imagePost?: string;
  typePost: PostTypeSelection;
};

export interface User {
  username: string;
  userImage?: string;
  userTime: number;
};

export interface Reactions {
  likes: number;
  comments: number;
  views: number;
};
