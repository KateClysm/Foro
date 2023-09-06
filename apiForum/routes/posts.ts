import express from 'express';
import Dposts from '../data/Dposts';

const router = express.Router();

router.get('/post', (req, res) => {
    res.json(Dposts);
});

export default router;
//-------------






// import express from "express";
// import { } from "../controllers/post";

// const router = express.Router();

// router.get("",); 

// export default router;