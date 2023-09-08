import { PostTypeSelection } from "./post-types.js";

export interface IPost {
    title: string;
    text: string; // Cambiado a string
    postImage?: string;
    typePost: PostTypeSelection;
    id:number;
  }
  
  // export interface IUser {
  //   userName: string;
  //   userImage?: string;
  //   userTime: number;
  // }
  
  // export interface IReactions {
  //   likes: number;
  //   comments: number;
  //   views: number;
  // }