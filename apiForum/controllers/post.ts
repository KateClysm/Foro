import moment from "moment";
import jwt from "jsonwebtoken";
import db from "../db";
import { Request, Response } from 'express';

interface IConditionalPosts {
    queryPetition: string;
    notification: string;
}

export const getPosts = (req: Request, res: Response) => {
    const cat = req.query.cat as string | undefined; // Asumimos que "cat" es una cadena o undefined

    const queryFind: IConditionalPosts = {
        queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE cat=?`,
        notification: 'Here are the posts that fulfill the criteria',
    };

    const queryAll: IConditionalPosts = {
        queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
        notification: 'Here are all the posts in the Foro!',
    };
    
    const queryDenied: IConditionalPosts = {
        queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
        notification: 'There are no posts that fulfill the criteria. You can be the first to make one! Or you could check all the posts:',
    };

    const queryHome: IConditionalPosts = {
        queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
        notification: '',
    };
    // Verificamos si se seleccionó la categoría 'home'
    if (cat === 'home') {
        // Si se seleccionó 'home', obtenemos todas las publicaciones
        db.query(queryHome.queryPetition, [], (err, allPosts) => {
            if (err) {
                return res.status(500).json({ message: 'Error fetching all posts.' });
            }
            return res.status(200).json({ arrayPosts: allPosts, message: queryHome.notification });
        });
        return; // Salimos de la función después de hacer la consulta
    }

    // Verificamos si se seleccionó la categoría 'all'
    if (cat === 'all') {
        // Si se seleccionó 'all', obtenemos todas las publicaciones
        db.query(queryAll.queryPetition, [], (err, allPosts) => {
            if (err) {
                return res.status(500).json({ message: 'Error fetching all posts.' });
            }
            return res.status(200).json({ arrayPosts: allPosts, message: queryAll.notification });
        });
        return; // Salimos de la función después de hacer la consulta
    }

    // Verificamos si se seleccionó una categoría específica
    if (cat) {
        // Si se seleccionó una categoría específica, verificamos si existen publicaciones con esa categoría
        db.query(queryFind.queryPetition, [cat], (err, arrayPosts: []) => {
            if (err) {
                return res.status(500).json({ message: 'Error fetching posts.' });
            }
            if (arrayPosts.length === 0) {
                // No se encontraron publicaciones con la categoría seleccionada
                // Luego, realizamos una consulta para obtener todas las publicaciones
                return db.query(queryDenied.queryPetition, [], (err, allPosts) => {
                    if (err) {
                        return res.status(500).json({ message: 'Error fetching all posts.' });
                    }
                    return res.status(200).json({ arrayPosts: allPosts, message: queryDenied.notification });
                });
            }
            // Se encontraron publicaciones con la categoría seleccionada
            return res.status(200).json({ arrayPosts, message: queryFind.notification });
        });
        return; // Salimos de la función después de hacer la consulta
    }

    // Si no se seleccionó una categoría válida, devolvemos un mensaje de error
    return res.status(400).json({ message: 'Invalid category.' });
};

// AÑADIR GET POST (1)
// export const getPost = (req, res) => {
//     const q =
//       "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";
  
//     db.query(q, [req.params.id], (err, data) => {
//       if (err) return res.status(500).json(err);
  
//       return res.status(200).json(data[0]);
//     });
//   };

     
  


export const addPost = (req: Request, res: Response) => {
    const token = req.cookies.accessToken; 
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "secretkey", (err:any, userInfo:any) => {    //LOS ANY ESTAN MAL, CORREGIRLOS
        if (err) return res.status(403).json("Token is not valid!");

        const q = "INSERT INTO posts (`title`, `description`, `img`, `createAt`, `userId`, `cat`) VALUES (?)";

        const values = [
            req.body.title,
            req.body.description,
            req.body.img,
            moment(Date.now()).format("YYYY-MM_DD HH:mm:ss"),
            userInfo?.id, // Usamos "?." para asegurarnos de que userInfo no sea undefined
            req.body.cat,
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Post has been created!")
        })
    });
};














// import moment from "moment";
// import jwt from "jsonwebtoken";
// import db from "../db";
// import { Request, Response } from 'express';

// interface IConditionalPosts {
//     queryPetition: string;
//     notification: string;
// }

// export const getPosts = (req: Request, res: Response) => {
//     const cat = req.query.cat as string | undefined; // Asumimos que "cat" es una cadena o undefined

//     const queryFind: IConditionalPosts = {
//         queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE cat=?`,
//         notification: 'Here are the posts that fulfill the criteria',
//     };

//     const queryAll: IConditionalPosts = {
//         queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
//         notification: 'Here are all the posts in the Foro!',
//     };
    
//     const queryDenied: IConditionalPosts = {
//         queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
//         notification: 'There are no posts that fulfill the criteria. You can be the first to make one! Or you could check all the posts:',
//     };


//     // Definimos una función para verificar si existen publicaciones con la categoría seleccionada
//     const checkCategoryAndFetchPosts = (category: string) => {
//         db.query(queryFind.queryPetition, [category], (err, arrayPosts:[]) => {
//             if (err) {
//                 return res.status(500).json({ message: 'Error fetching posts.' });
//             }
//             if (arrayPosts.length === 0) {
//                 // No se encontraron publicaciones con la categoría seleccionada
//                 // Luego, realizamos una consulta para obtener todas las publicaciones
//                 db.query(queryDenied.queryPetition, [], (err, allPosts) => {
//                     if (err) {
//                         return res.status(500).json({ message: 'Error fetching all posts.' });
//                     }
//                     return res.status(200).json({ arrayPosts: allPosts, message: queryDenied.notification });
//                 });
//             } else {
//                 // Se encontraron publicaciones con la categoría seleccionada
//                 return res.status(200).json({ arrayPosts, message: queryFind.notification });
//             }
//         });
//     };

//     // Verificamos si se seleccionó la categoría 'all'
//     if (cat === 'all') {
//         // Si se seleccionó 'all', obtenemos todas las publicaciones
//         db.query(queryAll.queryPetition, [], (err, allPosts) => {
//             if (err) {
//                 return res.status(500).json({ message: 'Error fetching all posts.' });
//             }
//             return res.status(200).json({ arrayPosts: allPosts, message: queryAll.notification });
//         });
//     } else if (cat) {
//         // Si se seleccionó una categoría específica, verificamos si existen publicaciones con esa categoría
//         checkCategoryAndFetchPosts(cat);
//     } else {
//         // Si no se seleccionó una categoría válida, devolvemos un mensaje de error
//         return res.status(400).json({ message: 'Invalid category.' });
//     }
// };


// import moment from "moment";
// import jwt from "jsonwebtoken";
// import db from "../db";
// import { Request, Response } from 'express';


//lógica final
// interface IConditionalPosts {
//     queryPetition: string;
//     notification: string;
// }
// export const getPosts = (req: Request, res: Response) => {

//     const cat = req.query.cat;

//     const queryFind: IConditionalPosts = {
//         queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE cat=?`,
//         notification: 'Here are the posts that fulfill the criteria',
//     };

//     const queryDenied: IConditionalPosts = {
//         queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
//         notification: 'There are no posts that fulfill the criteria. You can be the first to make one! Or you could check all the posts:',
//     };

//     const queryAll: IConditionalPosts = {
//         queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
//         notification: 'Here are all the posts in the Foro!',
//     }
    // const selectedQuery = cat ? queryFind : queryDenied : queryAll; 
    // const selectedQuery = cat === 'all' ? queryAll : (cat ? queryFind : queryDenied);
    // const selectedQuery = cat === 'all' ? queryAll : (cat === 'notfound'? queryDenied : queryFind);
    // let selectedQuery:IConditionalPosts = {queryPetition: ``, notification:''};
    // if (cat ==='all'){return selectedQuery = queryAll};
    // if (cat === 'notfound'){return selectedQuery = queryDenied};
    // if (cat){return selectedQuery = queryFind};

    // db.query(selectedQuery.queryPetition, cat ? [cat] : [], (err, arrayPosts) => {  
    //     if (cat === 'all') { //si se seleccionó la categoría all
    //         return res.status(200).json({ arrayPosts, message: selectedQuery.notification }); 
    //     }
    //     if (cat) { //si se seleccionó una categoría y existen posteos con esa categoría
    //         return res.status(200).json({ arrayPosts, message: selectedQuery.notification }); 
    //     }
        // if (cat === 'notfound'){
        //     return res.status(200).json({ arrayPosts, message: selectedQuery.notification }); 
        // }
        // if (err || cat === 'notfound') {
        //     try{
        //         const newcat = 'all';
        //         db.query(queryDenied.queryPetition, newcat ? [newcat] : [], (err, arrayPosts) => {  
        //             if (newcat === 'all'){
        //                 return res.status(200).json({ arrayPosts, message: selectedQuery.notification })
        //             }
        //         })
        //     }catch{
        //         return res.status(500).json({ message: 'Error fetching all posts.' });
        //     };
        // }
//     });
// };







//prototipo de lógica (cómo la pensé en un principio, con errores y todo)

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



//lógica vieja
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


// export const addPost = (req:Request, res:Response) => {
//     const token = req.cookies.accessToken;
//     if(!token) return res.status(401).json('Not logged in!');

//     jwt.verify(token, 'secretKey', (error:any, userInfo:any) => {
//         if(error) return res.status(403).json('Token is not valid!');
    
//         const q = "INSERT INTO posts (`title`, `description`, `img`,`createAt`, `userId`, `cat`) VALUES (?)";

//         const values = [
//             req.body.title,
//             req.body.description,
//             req.body.img,
//             moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
//             userInfo.id,
//             req.body.cat
//         ];
    
//         db.query(q, [values], (error:any, data:any) => {
//             if(error) return res.status(500).json(error);
//             return res.status(200).json('Post has been created!');
//         })
//     })   
// }

// export const deletePost = (req:any, res:any) => {
//     const token = req.cookies.accessToken;
//     if(!token) return res.status(401).json('Not authenticated!');

//     jwt.verify(token, 'secretKey', (error:any, userInfo:any) => {
//         if(error) return res.status(403).json('Token is not valid!');

//         const postId = req.params.id;
//         const q = 'DELETE FROM posts WHERE `id` = ? AND `uid` = ?';

//         db.query(q, [postId, req.query.id], (error: any, data:any) => {
//             if(error) return res.status(403).json('You can delete only your posts.');

//             return res.json('Post has been deleted!')
//         })
//     })
// }

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