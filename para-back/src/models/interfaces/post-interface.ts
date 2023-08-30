import { PostTypeSelection } from "./post-types.js";

export interface Post {
    title: string;
    text: string; // Cambiado a string
    postImage?: string;
    typePost: PostTypeSelection;
  }
  
  export interface User {
    userName: string;
    userImage?: string;
    userTime: number;
  }
  
  export interface Reactions {
    likes: number;
    comments: number;
    views: number;
  }