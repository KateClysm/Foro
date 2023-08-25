// import express, { Express, Request, Response } from "express";
// import { hey } from "./examplecode.js";

// const port = 8000;
// const app: Express = express();


// app.get("/", (req:Request, res:Response) =>{
//     res.send("HELLO FROM EXPRESS + TS");
// });

// app.listen(port, () => {
//     console.log (`now listening on port ${port}`);
// });

// console.log(hey);


// backend/src/index.ts
import express from 'express';
import cors from 'cors';
import forumRoutes from './routes/forumRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
// Otros middlewares...

// Usa las rutas
// app.use('/api/forum', forumRoutes);  //esto usa la ruta /api/forum y si estamos en http://localhost:3001/ nos dá un cannot get
app.use('', forumRoutes); //esto usa las rutas declaradas en forumRoutes y no nos da cannot gate, muestra: ¡Hola desde el servidor Express!

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});