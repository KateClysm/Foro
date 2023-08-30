import { PostTypeSelection } from './PostTypes';

export interface IPost {
  title: string;
  text: string;    //ver si lo podemos reemplazar por un eriquecedor de texto
  postImage?: string;   //lo cambié a postImage
  typePost: PostTypeSelection;
};

export interface IUser {
  userName: string;
  userImage?: string;
  userTime: number;
};

export interface IReactions {
  likes: number;
  comments: number;
  views: number;
};