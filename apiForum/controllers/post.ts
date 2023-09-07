import moment from "moment";
import jwt from "jsonwebtoken";
import db from "../db";

export const getPosts = (req:any, res:any) => {
    const q = req.query.cat ? `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE cat=?` 
        : `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`
    
    db.query(q, [req.query.cat], (error:any, data:any) => {
        if(error)  return res.status(500).send(error);

        return res.status(200).json(data);
    })
}

export const addPost = (req:any, res:any) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json('Not logged in!');

    jwt.verify(token, 'secretKey', (error:any, userInfo:any) => {
        if(error) return res.status(403).json('Token is not valid!');
    
        const q = "INSERT INTO posts (`title`, `description`, `img`,`createAt`, `userId`, `cat`) VALUES (?)";

        const values = [
            req.body.title,
            req.body.description,
            req.body.img,
            moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
            userInfo,
            req.body.cat
        ];
    
        db.query(q, [values], (error:any, data:any) => {
            if(error) return res.status(500).json(error);
            return res.status(200).json('Post has been created!');
        })
    })   
}

export const deletePost = (req:any, res:any) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json('Not authenticated!');

    jwt.verify(token, 'secretKey', (error:any, userInfo:any) => {
        if(error) return res.status(403).json('Token is not valid!');

        const postId = req.params.id;
        const q = 'DELETE FROM posts WHERE `id` = ? AND `uid` = ?';

        db.query(q, [postId, req.query.id], (error: any, data:any) => {
            if(error) return res.status(403).json('You can delete only your posts.');

            return res.json('Post has been deleted!')
        })
    })
}

export const updatePost = (req:any, res:any) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json('Not logged in!');

    jwt.verify(token, 'secretKey', (error:any, userInfo:any) => {
        if(error) return res.status(403).json('Token is not valid!');
    
        const q = "UPDATE posts SET `title`=?, `description`=?, `img`=?,`createAt`=?, `userId`=?, `cat`=? WHERE `id` = ? AND uid = ?";

        const postId = req.params.id;
        const values = [
            req.body.title,
            req.body.description,
            req.body.img,
            req.body.cat
        ];
    
        db.query(q, [...values, postId, userInfo], (error:any, data:any) => {
            if(error) return res.status(500).json(error);
            return res.status(200).json('Post has been updated!');
        })
    })  
}