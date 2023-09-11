import { PostTypeSelection } from "./post-types.js";

export interface IPostJson {
    title: string;
    text: string; // Cambiado a string
    postImage?: string;
    typePost: PostTypeSelection;
    id:number;
  }
  
  export interface IUserJson {
    userName: string;
    userImage?: string;
    userTime: number;
  }
  
  export interface IReactionsJson {
    likes: number;
    comments: number;
    views: number;
  }