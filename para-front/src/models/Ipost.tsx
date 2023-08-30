import { PostTypeSelection } from './PostTypes';

export interface Post {
  title: string;
  text: string;    //ver si lo podemos reemplazar por un eriquecedor de texto
  postImage?: string;   //lo cambié a postImage
  typePost: PostTypeSelection;
};

export interface User {
  userName: string;
  userImage?: string;
  userTime: number;
};

export interface Reactions {
  likes: number;
  comments: number;
  views: number;
};