import db from "../db";
import { Request, Response } from 'express';
import { IPost } from "../interfaces/IPost";
import jwt from 'jsonwebtoken';

interface IPetitionNotification {
    queryPetition: string;
    notification: string;
};

//AÑADIR UN POSTEO
export const addPost = (req: Request, res: Response) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err: any, userInfo: any) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "INSERT INTO posts (`title`, `description`, `img`, `uid`, `createAt`, `cat`) VALUES (?, ?, ?, ?, ?, ?)";

    const values = [
      req.body.title,
      req.body.description,
      req.body.img,
      req.body.uid, // Utiliza el uid del cuerpo de la solicitud
      req.body.createAt,
      req.body.cat,
    ];

    db.query(q, values, (err, data) => {
      if (err) {
        console.error("Error creating post:", err);
        return res.status(500).json("Error creating post");
      }

      return res.json("Post has been created");
    });
  });
};


// export const addPost = (req: Request, res: Response) => {
//   const token = req.cookies.accessToken;

//   if (!token) return res.status(401).json("Not authenticated!");

//   jwt.verify(token, "jwtkey", (err: any, userInfo: any) => {
//     if(err) {return res.status(403).json("Token is not valid!");}

//     const id = req.body.uid;

//     const values: any[] = [
//       req.body.title,
//       req.body.description,
//       req.body.cat, 
//       req.body.createAt,
//     ];

//     const placeholders: string[] = [
//       "title = ?",
//       "description = ?",
//       "cat = ?",
//       "createAt = ?",
//     ];

//     if (req.body.img) {
//       values.push(req.body.img);
//       placeholders.push("img = ?");
//     }

//     const updateFields = placeholders.join(", ");
//     console.log('updateFields: ', updateFields);

//     const q = `INSERT INTO posts (${updateFields}, id = ?) VALUES (?, ?)`;
//     // const q = "INSERT INTO posts (`title`, `description`, `img`, `uid`, `createAt`, `cat`) VALUES (?, ?, ?, ?, ?, ?)";

//     db.query(q, [...values, id], (err, data) => {
//       if (err) {
//         console.error("Error creating post:", err);
//         return res.status(500).json("Error creating post");
//       }
//       // return res.json("Post has been created");
//     });
    
//   });
// };




// export const adddPost = (req: Request, res: Response) => {
//   const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("Not authenticated!");

//   jwt.verify(token, "jwtkey", (err: any, userInfo: any) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     const id = req.params.id;
    
    
//     const values: any[] = [
//       req.body.title,
//       req.body.description,
//       req.body.cat
//     ];

//     const placeholders: string[] = [
//       "title = ?",
//       "description = ?",
//       "cat = ?"
//     ];

//     if (req.body.img) {
//       values.push(req.body.img);
//       placeholders.push("img = ?");
//     }

//     const updateFields = placeholders.join(", ");
//     console.log('updateFields: ', updateFields);

//     const q = `UPDATE posts SET ${updateFields} WHERE uid=? AND id=?`;
//     db.query(q, [...values, uid, id], (err, data) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json(err);
//       }
//       res.status(200).json("User updated successfully");
//     });
//   });
// };

export const updatePost = (req: Request, res: Response) => {
    const token = req.cookies.accessToken;
    if (!token){return res.status(401).json("Not authenticated!")};
  
    jwt.verify(token, "jwtkey", (err: any, userInfo: any) => {
      if (err){return res.status(403).json("Token is not valid!")};
  
      const id = req.params.id;
      const uid = req.body.uid;
      
      const values: any[] = [
        req.body.title,
        req.body.description,
        req.body.cat
      ];
  
      const placeholders: string[] = [
        "title = ?",
        "description = ?",
        "cat = ?"
      ];
  
      if (req.body.img) {
        values.push(req.body.img);
        placeholders.push("img = ?");
      }
  
      const updateFields = placeholders.join(", ");
      console.log('updateFields: ', updateFields);
  
      const q = `UPDATE posts SET ${updateFields} WHERE uid=? AND id=?`;
      db.query(q, [...values, uid, id], (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json(err);
        }
        res.status(200).json("User updated successfully");
      });
    });
};



//ELIMINAR UN POSTEO
export const deletePost = (req: Request, res: Response) => {
    const token = req.cookies.accessToken;

    if (!token){return res.status(401).json("Not authenticated!")};
  
    jwt.verify(token, "jwtkey", (err: any, userInfo: any) => {
      if (err){return res.status(403).json("Token is not valid!")};

        const postId = req.params.id; 
        const uid = req.body.uid;

        if (userInfo.id !== uid) {
            console.error("User is not the owner of the post.");
            return res.status(403).json("You can delete only your posts!");
        }
  
        const q = "DELETE FROM posts WHERE `id` = ?";
        db.query(q, [postId], (err, data) => {
            if (err){return res.status(403).json("Error deleting the post.")};
            return res.json("The post has been deleted");
        });
    });
};


// OBTENER UN S0LO POSTEO
export const getPost = (req: Request, res: Response) => {
    const q = "SELECT p.id, u.id, u.username, u.name, u.profilePic, p.title, p.description, p.img, p.cat, p.createAt FROM users AS u JOIN posts AS p ON u.id = p.uid WHERE p.id = ?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (Array.isArray(data) && data.length > 0) {
            const post: IPost = data[0] as IPost; 
            return res.status(200).json({ data: post, message: "Here is the extended post" });
        }            
        // return res.status(404).json({ error: 'Post not found' });
    });
};


//RENDERIZADO DE POSTEOS PARA EL HOME Y PARA LAS CATEGORÍAS
export const getPosts = (req: Request, res: Response) => {

  const cat = req.query.cat as string | null;
  
  const queryFind: IPetitionNotification = {
      queryPetition: `SELECT p.*, u.id AS userId, username, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.uid) WHERE cat=?`,
      notification: 'Here are the posts that fulfill the criteria',
  };

  const queryAll: IPetitionNotification = {
      queryPetition: `SELECT p.*, u.id AS userId, username, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.uid)`,
      notification: 'Here are all the posts in the Foro!',
  };

  const queryDenied: IPetitionNotification = {
      queryPetition: `SELECT p.*, u.id AS userId, username, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.uid)`,
      notification: 'There are no posts that fulfill the criteria. You can be the first to make one! Or you could check all the posts:',
  };

  if (cat === 'home') {
      db.query(queryAll.queryPetition, [], (err, arrayPosts: []) => {
          if (err) {
              return res.status(500).json({ message: 'Error fetching all posts.' });
          }
          const limitedPosts = arrayPosts.slice(0, 3);
          return res.status(200).json({ arrayPosts: limitedPosts, message: 'Here you have some of the posts in our Foro!' });
      });
      return;
  }

  if (cat === 'all') {
      db.query(queryAll.queryPetition, [], (err, arrayPosts: []) => {
          if (err) {
              return res.status(500).json({ message: 'Error fetching all posts.' });
          }
          return res.status(200).json({ arrayPosts, message: queryAll.notification });
      });
      return;
  }

  if (cat ) {
      db.query(queryFind.queryPetition, [cat], (err, arrayPosts: []) => {
          if (err) {
              return res.status(500).json({ message: 'Error fetching posts.' });
          }
          if (arrayPosts.length === 0) {
              return db.query(queryDenied.queryPetition, [], (err, allPosts) => {
                  if (err) {
                      return res.status(500).json({ message: 'Error fetching all posts.' });
                  }
                  return res.status(200).json({ arrayPosts: allPosts, message: queryDenied.notification });
              });
          };
          return res.status(200).json({ arrayPosts, message: queryFind.notification });    
      });
      return; 
  };
  return res.status(400).json({ message: 'Invalid category.' });
};


//RENDERIZADO DE POSTEOS PARA UN USUARIO
export const getPostsForUser = (req: Request, res: Response) => {
    const uid = req.params.uid; // Obtén el uid del parámetro de la URL
  
    const q = `SELECT p.*, u.id AS userId, username, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.uid) WHERE p.uid = ?`;
  
    db.query(q, [uid], (err, arrayPosts: []) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching posts.' });
      }
      if (arrayPosts.length === 0) {
        return res.status(200).json({ message: "Hey! You haven't made a post?" });
      }
      return res.status(200).json({ arrayPosts, message: 'Your Posts'});
    });
  };