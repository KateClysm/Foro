//modulos
import { Request, Response } from 'express';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//base de datos
import db from "../db";
//interfaces
import IUser from '../models/interfaces/IUser';


export const register = (req: Request, res: Response) => {
    
    const q = "SELECT * FROM users WHERE email = ?"; 

    db.query(q, [req.body.email], (err, data) => {

        if (err) { return res.status(500).json(err)}; //si hubo un error
        
        const user: IUser[] = data as IUser[]; //si cumple con la interfaz

        if (user.length) { //si el email ya está registrado
            return res.status(409).json("User already exists!")
        };

        //si el usuario no existe, crear un nuevo usuario, hash la contraseña.
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