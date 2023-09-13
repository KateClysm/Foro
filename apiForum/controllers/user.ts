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