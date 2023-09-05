// importa las definiciones necesarias para Express y la base de datos
import { Request, Response } from 'express';
import Iuser from '../models/interfaces/Iuser';
import db from "../db";
import bcrypt from "bcryptjs";
//bcryptjs es una biblioteca de JavaScript utilizada para el hash y la verificación de contraseñas de manera segura. Su principal función es proteger las contraseñas almacenadas en una base de datos mediante el proceso de "hashing" y comparación de contraseñas. 
//Salting: bcryptjs maneja automáticamente la generación de "salts" (cadenas aleatorias únicas) para cada contraseña. El salt se concatena con la contraseña antes de realizar el hashing, lo que agrega una capa adicional de seguridad, incluso si dos usuarios tienen la misma contraseña, sus hashes serán diferentes debido a los salts únicos.



// Definición de la función de registro
export const register = (req: Request, res: Response) => {
    
    // chequeamos si el usuario existe:
    // "q" es una consulta SQL para verificar si el usuario ya existe en la base de datos.
    const q = "SELECT * FROM users WHERE username = ?";

    // ejecuta una consulta a la base de datos utilizando la función db.query
    //q: Es la consulta SQL que se va a ejecutar.
    //[req.body.username]: es un arreglo que contiene los parámetros que se van a sustituir en la consulta SQL. El valor de req.body.username se utiliza para reemplazar el marcador de posición ? en la consulta SQL.
    //cuando la consulta a la base de datos se complete se ejecuta el call back (err, data) => {...} para manejar el resultado de la consulta
    //err: es un objeto que contendrá información sobre cualquier error que ocurra durante la consulta a la base de datos.
    //data: es el resultado de la consulta a la base de datos. 
    db.query(q, [req.body.username], (err, data) => {

        if (err) { return res.status(500).json(err); } //si hubo un error
        
        // Comprueba si se encontraron resultados en la base de datos. deben cumplir con nuestra interfaz así que utilizamos una conversión para ajustar el resultado de la consulta al tipo que esperamos.
        const users: Iuser[] = data as Iuser[];

        if (users.length) { //si ya existe
            return res.status(409).json("User already exists!");
        }


        //si el usuario no existe, crear un nuevo usuario, hash la contraseña.
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        // const q = "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)"; //creamos otra consulta SQL
        // const values = [req.body.username, req.body.email, hashedPassword, req.body.name]
        // db.query(q,[values], (err,data) =>{
        //     if (err) {return res.status(500).json(err)};
        //     return res.status(200).json("User has been created");
        // });
        const q = "INSERT INTO users (username, email, password, name) VALUES (?, ?, ?, ?)"; // corrección en la consulta SQL para ts
        const values = [req.body.username, req.body.email, hashedPassword, req.body.name];
        db.query(q, values, (err, data) => {
            if (err) {return res.status(500).json(err);}
            return res.status(200).json("User has been created");
        });
    });
};


export const login = (req: Request, res: Response) => {
    const q = "SELECT * FROM users WHERE username = ?";
    db.query(q, [req.body.username], (err, data) => {
        if (err) { return res.status(500).json(err); } 
        
        const users: Iuser[] = data as Iuser[];
        if (users.length === 0) { 
            return res.status(404).json("User not found");
        }
    
        //select * from users nos devuelve un array, en este array va a haber únicamente un usuario, por eso luego de que aplicamos nuestra interfaz a la data y la renombramos como users, usamos users[0].password, que se compara con req.body.password
        const checkPassword = bcrypt.compareSync(req.body.password, users[0].password);
        if(!checkPassword) return res.status(400).json("Wrong password or username"); //si no son iguales devuelve un error

       
    });
};