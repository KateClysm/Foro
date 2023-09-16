import db from "../db";
import { Request, Response } from "express";
import { IUser } from "../models/IUser";
import jwt from 'jsonwebtoken';

export const getUser = (req: Request, res: Response) => {
  
    const userId = req.params.userId;
  
    const q = `SELECT id, username, email, name, city, website, coverImage FROM users WHERE id = ? `;

    db.query(q, [userId], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        const user: IUser[] = data as IUser[];
        if (user.length === 0) {
            return res.status(404).json("Usuario no encontrado");
        }
        return res.status(200).json(user[0]);
    });
};


export const updateUser = (req: Request, res: Response) => {

  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err: any, userInfo: any) => {
    if (err) return res.status(403).json("Token is not valid!");
      
      const id = req.params.id;
      console.log('id del usuario desde el server: ', id)


      const imgExists = req.body.coverImage;
      console.log(imgExists);

        const values = [
          req.body.username,
          req.body.name,
          req.body.email,
          req.body.city,
          req.body.website,
          req.body.coverImage
        ];

        console.log('values desde el server: ', values);

        const q = "UPDATE users SET username=?, name=?, email=?, city=?, website=?, coverImage=? WHERE id=?";
        db.query(q, [...values, id], (err, data) => {
            if (err) {
              console.error(err);
              return res.status(500).json(err);
            }
            res.status(200).json("User updated successfully");
        });
  });
};
