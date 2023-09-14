import { Request, Response } from "express";
import { IUser } from "../models/IUser";
import db from "../db";

export const getUser = (req: Request, res: Response) => {
    const userId = req.params.userId;
  
    const q = `SELECT id, username, email, name, profilePic, city, website, coverImage FROM users WHERE id = ? `;

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
    // const userId = req.params.id; // Obtén el ID del usuario autenticado desde el token
  
    // const { username, name, email, city, website, profilePic, coverImage } = req.body;
  
    const q = `UPDATE users SET username=?, name=?, email=?, city=?, website=?, profilePic=?, coverImage=? WHERE id=?`;
  
    const values = [
      req.body.username,
      req.body.name,
      req.body.email,
      req.body.city,
      req.body.website,
      req.body.profilePic,
      req.body.coverImage,
      req.params.id,
    ]
  
    db.query(q, ...values, (err:any, data:any) => {
      if (err) {
        return res.status(500).json(err);
      }
  
      if (data && "affectedRows" in data && data.affectedRows === 1) {
        return res.status(200).json("Usuario actualizado con éxito");
      }
      return res.status(404).json("Usuario no encontrado");
      
    });
  };