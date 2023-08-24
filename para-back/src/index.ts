import express, { Express, Request, Response } from "express";
import { hey } from "./examplecode.js";

const port = 8000;
const app: Express = express();


app.get("/", (req:Request, res:Response) =>{
    res.send("HELLO FROM EXPRESS + TS");
});

app.listen(port, () => {
    console.log (`now listening on port ${port}`);
});

console.log(hey);