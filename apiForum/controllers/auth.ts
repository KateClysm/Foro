import { Request, Response } from 'express';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db";
import IUser from '../models/IUser';


export const register = (req: Request, res: Response) => {
    
    const q = "SELECT * FROM users WHERE email = ?"; 

    db.query(q, [req.body.email], (err, data) => {

        if (err) { return res.status(500).json(err)};
        
        const user: IUser[] = data as IUser[];

        if (user.length) { 
            return res.status(409).json("User already exists!")
        };

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        const q = "INSERT INTO users (username, email, password, name) VALUES (?, ?, ?, ?)";
        const values = [req.body.username, req.body.email, hashedPassword, req.body.name];
        db.query(q, values, (err, data) => {
            if (err) {return res.status(500).json(err);}
            return res.status(200).json({ message: "User has been created" });
        });
    });
};



export const login = (req: Request, res: Response) => {
    const q = "SELECT * FROM users WHERE email = ?";        
    db.query(q, [req.body.email], (err, data) => {    
        if (err) { return res.status(500).json(err)}; 
        
        const user: IUser[] = data as IUser[];
        if (user.length === 0) { 
            return res.status(404).json("User not found");
        };
    
        const checkPassword = bcrypt.compareSync(req.body.password, user[0].password);
        if(!checkPassword) return res.status(400).json("Wrong password or username"); 

        // const token = jwt.sign({id:user[0].id}, "secretKey");
        const token = jwt.sign({id:user[0].id}, "jwtkey");
        // console.log('EL TIPO DEL ID QUE SE PASA COMO USERINFO ES: ', typeof user[0].id);   DA NUMBER

        const {password, ...others} = user[0]; //destructuración
        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(others);
    });
};

export const logout = (req: Request, res: Response) => {
    res.clearCookie("accessToken", {
        secure:true,
        sameSite:"none"
    }).status(200).json("User has been logged out")
};