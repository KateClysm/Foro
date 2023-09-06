import moment from "moment";
import { db } from "../db";
import jwt from "jsonwebtoken";

export const getPosts = (req:any, res:any) => {
    const q = req.query.cat ? `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE cat=?` 
        : `SELECT * FROM posts, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`
    
    db.query(q, [req.query.cat], (error, data) => {
        if(error)  return res.status(500).send(error);

        return res.status(200).json(data);
    })
}

export const addPost = (req:any, res:any) => {
    // verificar user con jwt, las cookies y el token
    // const token = req.cookies.accessToken;
    // if(!token) return res.status(401).json('Not logged in!');

    // jwt.verify(token, 'secretKey', (error, userInfo) => {
    //     if(error) return res.status(403).json('Token is not valid!');
    // })

    const q = "INSERT INTO posts (`title`, `description`, `img`, `createAt`, `userId`) VALUES (?)";

    const values = [
        req.body.title,
        req.body.description,
        req.body.img,
        moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
        req.body.userId // reemplazar por userInfo en cuanto se haga merge del uso del token en login
    ];

    db.query(q, [values], (error, data) => {
        if(error) return res.status(500).json(error);
        return res.status(200).json('Post has been created!');
    })
}

export const deletePost = (req:any, res:any) => {

}

export const updatePost = (req:any, res:any) => {

}