
import db from "../db";
import { Request, Response } from 'express';

interface IConditionalPosts {
    queryPetition: string;
    notification: string;
}

export const getPostsForHome = (req: Request, res: Response) => {

    const petition = req.query.paramForPetition;

    if (petition === 'home') {
        // Lógica para la página de inicio
        const queryHomepage: IConditionalPosts = {
            queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
            notification: 'Welcome to our spooky little nook',
        };

        db.query(queryHomepage.queryPetition, [], (err, arrayPosts: []) => {
            if (err) {
                return res.status(500).json({ message: 'Error fetching posts.' });
            }
            return res.status(200).json({ arrayPosts, message: queryHomepage.notification });
        });
        return;
    }
}
export const getPostsByCategory = (req: Request, res: Response) => {
    const petition = req.query.paramForPetition;
    if (petition !== 'home') {
        const cat = req.query.cat;
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
            // notification: 'There are no posts that fulfill the criteria. You can be the first to make one! Or you could check all the posts:',
            notification: 'ERROR EN INICIO',
        };

        //Verificamos si se seleccionó la categoría 'all' o si la ruta es '/'
        if (cat === 'all') {
            // Si se seleccionó 'all' o si la ruta es '/', obtenemos todas las publicaciones
            db.query(queryAll.queryPetition, [], (err, arrayPosts: []) => {
                if (err) {
                    return res.status(500).json({ message: 'Error fetching all posts.' });
                }
                
                return res.status(200).json({ arrayPosts, message: queryAll.notification });
            });
            return; // Salimos de la función después de hacer la consulta
        }
    
        //Verificamos si se seleccionó una categoría específica
        if (cat ) {
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
    }
};





// export const getPostsForHome = (req: Request, res: Response) => {
//     const petition = req.query.paramForPetition as string | null;
//     if (petition === 'home'){

//     if (req.query.cat === 'home'){
//         const queryHomepage: IConditionalPosts = {
//             queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
//             notification: 'Wellcome to our spooky little nook',
//         };

//         db.query(queryHomepage.queryPetition, [], (err, arrayPosts: []) => {
//             if (err) {
//                 return res.status(500).json({ message: 'Error fetching posts.' });
//             }
//             return res.status(200).json({ arrayPosts, message: queryHomepage.notification });
            
//         });
//     }
// }}
 

// export const getPosts = (req: Request, res: Response) => {
//     const petition = req.query.paramForPetition as string | null;
//     if (petition !== 'home'){
//         const cat = req.query.cat as string | null;

//         const queryFind: IConditionalPosts = {
//             queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE cat=?`,
//             notification: 'Here are the posts that fulfill the criteria',
//         };
    
//         const queryAll: IConditionalPosts = {
//             queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
//             notification: 'Here are all the posts in the Foro!',
//         };
        
//         const queryDenied: IConditionalPosts = {
//             queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
//             notification: 'There are no posts that fulfill the criteria. You can be the first to make one! Or you could check all the posts:',
//         };
    
//         // Verificamos si se seleccionó la categoría 'all' o si la ruta es '/'
//         if (cat === 'all') {
//             // Si se seleccionó 'all' o si la ruta es '/', obtenemos todas las publicaciones
//             db.query(queryAll.queryPetition, [], (err, arrayPosts: []) => {
//                 if (err) {
//                     return res.status(500).json({ message: 'Error fetching all posts.' });
//                 }
                
//                 return res.status(200).json({ arrayPosts, message: queryAll.notification });
//             });
//             return; // Salimos de la función después de hacer la consulta
//         }
    
//         //Verificamos si se seleccionó una categoría específica
//         if (cat ) {
//             // Si se seleccionó una categoría específica, verificamos si existen publicaciones con esa categoría
//             db.query(queryFind.queryPetition, [cat], (err, arrayPosts: []) => {
//                 if (err) {
//                     return res.status(500).json({ message: 'Error fetching posts.' });
//                 }
//                 if (arrayPosts.length === 0) {
//                     // No se encontraron publicaciones con la categoría seleccionada
//                     // Luego, realizamos una consulta para obtener todas las publicaciones
//                     return db.query(queryDenied.queryPetition, [], (err, allPosts) => {
//                         if (err) {
//                             return res.status(500).json({ message: 'Error fetching all posts.' });
//                         }
//                         return res.status(200).json({ arrayPosts: allPosts, message: queryDenied.notification });
//                     });
//                 }
//                 // Se encontraron publicaciones con la categoría seleccionada
                
//                 return res.status(200).json({ arrayPosts, message: queryFind.notification });
                
//             });
//             return; // Salimos de la función después de hacer la consulta
//         }
    
//         // Si no se seleccionó una categoría válida, devolvemos un mensaje de error
//         return res.status(400).json({ message: 'Invalid category.' });
//     }
// };





// import db from "../db";
// import { Request, Response } from 'express';

// interface IConditionalPosts {
//     queryPetition: string;
//     notification: string;
// }

// export const getPosts = (req: Request, res: Response) => {

//     const petition = req.query.paramForPetition as string | null; // Asumimos que "cat" es una cadena o undefined


//     if (petition !== 'home'){
//         const cat = req.query.cat as string | null;

//         const queryFind: IConditionalPosts = {
//             queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE cat=?`,
//             notification: 'Here are the posts that fulfill the criteria',
//         };
    
//         const queryAll: IConditionalPosts = {
//             queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
//             notification: 'Here are all the posts in the Foro!',
//         };
        
//         const queryDenied: IConditionalPosts = {
//             queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
//             notification: 'There are no posts that fulfill the criteria. You can be the first to make one! Or you could check all the posts:',
//         };
    
//         // Verificamos si se seleccionó la categoría 'all' o si la ruta es '/'
//         if (cat === 'all') {
//             // Si se seleccionó 'all' o si la ruta es '/', obtenemos todas las publicaciones
//             db.query(queryAll.queryPetition, [], (err, arrayPosts: []) => {
//                 if (err) {
//                     return res.status(500).json({ message: 'Error fetching all posts.' });
//                 }
                
//                 return res.status(200).json({ arrayPosts, message: queryAll.notification });
//             });
//             return; // Salimos de la función después de hacer la consulta
//         }
    
//         //Verificamos si se seleccionó una categoría específica
//         if (cat ) {
//             // Si se seleccionó una categoría específica, verificamos si existen publicaciones con esa categoría
//             db.query(queryFind.queryPetition, [cat], (err, arrayPosts: []) => {
//                 if (err) {
//                     return res.status(500).json({ message: 'Error fetching posts.' });
//                 }
//                 if (arrayPosts.length === 0) {
//                     // No se encontraron publicaciones con la categoría seleccionada
//                     // Luego, realizamos una consulta para obtener todas las publicaciones
//                     return db.query(queryDenied.queryPetition, [], (err, allPosts) => {
//                         if (err) {
//                             return res.status(500).json({ message: 'Error fetching all posts.' });
//                         }
//                         return res.status(200).json({ arrayPosts: allPosts, message: queryDenied.notification });
//                     });
//                 }
//                 // Se encontraron publicaciones con la categoría seleccionada
                
//                 return res.status(200).json({ arrayPosts, message: queryFind.notification });
                
//             });
//             return; // Salimos de la función después de hacer la consulta
//         }
    
//         // Si no se seleccionó una categoría válida, devolvemos un mensaje de error
//         return res.status(400).json({ message: 'Invalid category.' });
//     }

//     if (petition === 'home'){
//         const queryHomepage: IConditionalPosts = {
//             queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
//             notification: 'Our Home for Spooky shit',
//         };

//         db.query(queryHomepage.queryPetition, [], (err, arrayPosts: []) => {
//             if (err) {
//                 return res.status(500).json({ message: 'Error fetching all posts.' });
//             }
            
//             return res.status(200).json({ arrayPosts, message: queryHomepage.notification });
//         });
//         return; // Salimos de la función después de hacer la consulta  
//     }  
// };














// import db from "../db";
// import { Request, Response } from 'express';

// interface IConditionalPosts {
//     queryPetition: string;
//     notification: string;
// }

// //si el parámetro recibido es home, que se utilice getPostsForHome
// //hacer un queryHomepage con su queryPetition y notification y lógica. 




// export const getPostsByCategory = (req: Request, res: Response) => {
//     const cat = req.query.cat as string | null; // Asumimos que "cat" es una cadena o undefined

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

//     // Verificamos si se seleccionó la categoría 'all' o si la ruta es '/'
//     if (cat === 'all') {
//         // Si se seleccionó 'all' o si la ruta es '/', obtenemos todas las publicaciones
//         db.query(queryAll.queryPetition, [], (err, arrayPosts: []) => {
//             if (err) {
//                 return res.status(500).json({ message: 'Error fetching all posts.' });
//             }
            
//             return res.status(200).json({ arrayPosts, message: queryAll.notification });
//         });
//         return; // Salimos de la función después de hacer la consulta
//     }

//     //Verificamos si se seleccionó una categoría específica
//     if (cat) {
//         // Si se seleccionó una categoría específica, verificamos si existen publicaciones con esa categoría
//         db.query(queryFind.queryPetition, [cat], (err, arrayPosts: []) => {
//             if (err) {
//                 return res.status(500).json({ message: 'Error fetching posts.' });
//             }
//             if (arrayPosts.length === 0) {
//                 // No se encontraron publicaciones con la categoría seleccionada
//                 // Luego, realizamos una consulta para obtener todas las publicaciones
//                 return db.query(queryDenied.queryPetition, [], (err, allPosts) => {
//                     if (err) {
//                         return res.status(500).json({ message: 'Error fetching all posts.' });
//                     }
//                     return res.status(200).json({ arrayPosts: allPosts, message: queryDenied.notification });
//                 });
//             }
//             // Se encontraron publicaciones con la categoría seleccionada
//             return res.status(200).json({ arrayPosts, message: queryFind.notification });
//         });
//         return; // Salimos de la función después de hacer la consulta
//     }

//     // Si no se seleccionó una categoría válida, devolvemos un mensaje de error
//     return res.status(400).json({ message: 'Invalid category.' });
// };







// import db from "../db";
// import { Request, Response } from 'express';

// interface IConditionalPosts {
//     queryPetition: string;
//     notification: string;
// }

// export const getPostsByCategory = (req: Request, res: Response) => {
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

//     // Verificamos si se seleccionó la categoría 'all' o si la ruta es '/'
//     if (cat === 'all' || !cat) {
//         // Si se seleccionó 'all' o si la ruta es '/', obtenemos todas las publicaciones
//         db.query(queryAll.queryPetition, [], (err, arrayPosts: []) => {
//             if (err) {
//                 return res.status(500).json({ message: 'Error fetching all posts.' });
//             }
            
//             // Mostramos solo las primeras 4 publicaciones si la ruta es '/'
//             const responsePosts = (cat !== 'all') ? arrayPosts.slice(0, 4) : arrayPosts;
//             return res.status(200).json({ arrayPosts: responsePosts, message: queryAll.notification });
//         });
//         return; // Salimos de la función después de hacer la consulta
//     }

//     //Verificamos si se seleccionó una categoría específica
//     if (cat) {
//         // Si se seleccionó una categoría específica, verificamos si existen publicaciones con esa categoría
//         db.query(queryFind.queryPetition, [cat], (err, arrayPosts: []) => {
//             if (err) {
//                 return res.status(500).json({ message: 'Error fetching posts.' });
//             }
//             if (arrayPosts.length === 0) {
//                 // No se encontraron publicaciones con la categoría seleccionada
//                 // Luego, realizamos una consulta para obtener todas las publicaciones
//                 return db.query(queryDenied.queryPetition, [], (err, allPosts) => {
//                     if (err) {
//                         return res.status(500).json({ message: 'Error fetching all posts.' });
//                     }
//                     return res.status(200).json({ arrayPosts: allPosts, message: queryDenied.notification });
//                 });
//             }
//             // Se encontraron publicaciones con la categoría seleccionada
//             return res.status(200).json({ arrayPosts, message: queryFind.notification });
//         });
//         return; // Salimos de la función después de hacer la consulta
//     }

//     // Si no se seleccionó una categoría válida, devolvemos un mensaje de error
//     return res.status(400).json({ message: 'Invalid category.' });
// };












// const queryHome: IConditionalPosts = {
//     queryPetition: `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`,
//     notification: '',
// };
// // Verificamos si se seleccionó la categoría 'home'
// if (cat === 'home') {
//     // Si se seleccionó 'home', obtenemos todas las publicaciones
//     db.query(queryHome.queryPetition, [], (err, allPosts) => {
//         if (err) {
//             return res.status(500).json({ message: 'Error fetching all posts.' });
//         }
//         return res.status(200).json({ arrayPosts: allPosts, message: queryHome.notification });
//     });
//     return; // Salimos de la función después de hacer la consulta
// }


// // AÑADIR GET POST (1)
// export const getPost = (req:Request, res:Response) => {
//     const q =
//       "SELECT p.id, `username`, `title`, `description`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";
  
//       db.query(q, [req.params.id], (err, data: RowDataPacket[]) => {
//       if (err) return res.status(500).json(err);
  
//       return res.status(200).json(data[0]);
//     });
//   };

     
  


// export const addPost = (req: Request, res: Response) => {
//     const token = req.cookies.accessToken; 
//     if (!token) return res.status(401).json("Not authenticated!");

//     jwt.verify(token, "secretkey", (err:any, userInfo:any) => {    //LOS ANY ESTAN MAL, CORREGIRLOS
//         if (err) {
//             console.error("Error verifying token:", err);
//             return res.status(401).json("Token is not valid!");
//         }

//         const q = "INSERT INTO posts (`title`, `description`, `img`, `userId`, `createAt`, `cat`) VALUES (?)";

//         const values = [
//             req.body.title,
//             req.body.description,
//             req.body.img,
//             moment(Date.now()).format("YYYY-MM_DD HH:mm:ss"),
//             userInfo?.id, // Usamos "?." para asegurarnos de que userInfo no sea undefined
//             req.body.cat,
//         ]

//         db.query(q, [values], (err, data) => {
//             if (err) return res.status(500).json(err);
//             return res.status(200).json("Post has been created!")
//         })
//     });
// };


