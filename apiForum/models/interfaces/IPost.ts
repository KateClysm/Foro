export interface IPost {
    userId: number;
    username:string,
    name:string, 
    profilePic:string,
    id:number;
    title: string;
    description: string;
    img?: string;
    createAt: string;
    cat?: string;
}