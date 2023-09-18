import db from "../db";
import { Request, Response } from "express";
import { IUser } from "../interfaces/IUser";
import jwt from 'jsonwebtoken';

export const getUser = (req: Request, res: Response) => {
  
    const userId = req.params.userId;
  
    const q = `SELECT id, username, email, name, city, website, coverImage, profilePic FROM users WHERE id = ? `;

    db.query(q, [userId], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        const user: IUser[] = data as IUser[];
        if (user.length === 0) {
            return res.status(404).json("User not found");
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

      const values: any[] = [
        req.body.username,
        req.body.name,
        req.body.city,
        req.body.website
      ];
  
      const placeholders: string[] = [
        "username = ?",
        "name = ?",
        "city = ?",
        "website = ?"
      ];
  
      // Check if coverImage is provided
      if (req.body.coverImage) {
        values.push(req.body.coverImage);
        placeholders.push("coverImage = ?");
      }
  
      // Check if profilePic is provided
      if (req.body.profilePic) {
        values.push(req.body.profilePic);
        placeholders.push("profilePic = ?");
      }
  
      const updateFields = placeholders.join(", ");
      console.log('updateFields: ', updateFields);
  
      const q = `UPDATE users SET ${updateFields} WHERE id=?`;
      db.query(q, [...values, id], (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json(err);
        }
        res.status(200).json("User updated successfully");
      });
    });
  };
  
  
  
  
  