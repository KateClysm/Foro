import moment from "moment";
import jwt from "jsonwebtoken";
import db from "../db";
import { Request, Response } from 'express';


//lógica final
interface IConditionalPosts {
    queryPetition: string;
    notification: string;
}
export const getPosts = (req: Request, res: Response) => {

    const cat = req.query.cat;

    const queryFind: IConditionalPosts = {
        queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE cat=?`,
        notification: 'Here are the posts that fulfill the criteria',
    };

    const queryDenied: IConditionalPosts = {
        queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
        notification: 'There are no posts that fulfill the criteria. You can be the first to make one! Or you could check all the posts:',
    };

    const queryAll: IConditionalPosts = {
        queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
        notification: 'Here are all the posts in the Foro!',
    }
    const selectedQuery = cat ? queryFind : queryDenied : queryAll; 
    
    db.query(selectedQuery.queryPetition, cat ? [cat] : [], (err, arrayPosts) => {  
        if (cat?) { //si se seleccionó una categoría y existen posteos con esa categoría
            if (err) {
                return res.status(500).json({ message: 'Error fetching all posts.' });
            }
            return res.status(200).json({ arrayPosts, message: selectedQuery.notification }); //queryAll
        }
        if (cat === 'all') { //si se seleccionó la categoría all
            if (err) {
                return res.status(500).json({ message: 'Error fetching all posts.' });
            }
            return res.status(200).json({ arrayPosts, message: selectedQuery.notification }); //queryAll
        }
        if (!cat) { //si se clickleó en una categoría pero no hay ningún posteo con esa categoría
            db.query(queryDenied.queryPetition, [], (err, allPosts) => {
                if (err) {
                    return res.status(500).json({ message: 'Error fetching all posts.' });
                }
                return res.status(200).json({ arrayPosts: allPosts, message: selectedQuery.notification }); //muestra todos los posteos y una notificación
        })};
    });
};







//prototipo de lógica
// interface IConditionalPosts {
//     queryPetition: Query;
//     notification: string;
// }
// export const getPosts = (req:any, res:any) => {
//     queryFind:conditionalPosts = (req.query.cat ? `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE cat=?`, 'Here are the posts that fullfill the criteria'); //querie para encontrar el posteo que cumple con la categoria

//     queryDenied:conditionalPosts =(`SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`, 'There is no posts that fullfill the criteria, you can be the first to make one! Or you could check all the posts:'); //querie para renderizar todos los posteos y pasar un mensaje de 404
//     db.query( queryFind.queryPetition as q, [req.query.cat], (error:conditionalPosts, data:any) => { //se le pasa queryFind como la query predeterminada
//         return//si no se cumplio la petición  queryFind
//             if (err) {
//                 db.query( queryFind.queryPetition as q, [req.query.cat], (error:conditionalPosts, data:any) => {
//                     data = queryDenied.queryPetition;
//                     return res.status(200).json(data);
//                     return res.status(404).json({ message: queryDenied.notification });
//                 }
//             }
//             return res.status(200).json(data);//si se cumplió la petición
//             return res.status(200).json({ message: queryFind.notification });
//         }
//     )
// }







 // db.query(q, values, (err, data) => {
    //     if (err) {return res.status(500).json(err);}
    //     return res.status(200).json({ message: "User has been created" });
    // });



    // const q = req.query.cat ? `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE cat=?` 
    //     : `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`
    
    // db.query(q, [req.query.cat], (error:any, data:any) => {
    //     if(error)  return res.status(500).send(error);

    //     return res.status(200).json(data);
    // })


export const addPost = (req:Request, res:Response) => {
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
            userInfo.id,
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

// export const updatePost = (req:any, res:any) => {
//     const token = req.cookies.accessToken;
//     if(!token) return res.status(401).json('Not logged in!');

//     jwt.verify(token, 'secretKey', (error:any, userInfo:any) => {
//         if(error) return res.status(403).json('Token is not valid!');
    
//         const q = "UPDATE posts SET `title`=?, `description`=?, `img`=?,`createAt`=?, `userId`=?, `cat`=? WHERE `id` = ? AND uid = ?";

//         const postId = req.params.id;
//         const values = [
//             req.body.title,
//             req.body.description,
//             req.body.img,
//             req.body.cat
//         ];
    
//         db.query(q, [...values, postId, userInfo], (error:any, data:any) => {
//             if(error) return res.status(500).json(error);
//             return res.status(200).json('Post has been updated!');
//         })
//     })  
// }