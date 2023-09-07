export interface IPost {
  post: {
    name: string;
    userId: number;
    profilePic: string;
    title: string;
    description: string;
    img?: string;
    createAt: string;
    cat?: string;
}
}

export interface IUser {
  userName: string;
  profilePic?: string;
  userTime: number;
};

export interface IReactions {
  likes: number;
  comments: number;
  views: number;
};