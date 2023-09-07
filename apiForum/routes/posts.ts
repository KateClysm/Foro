import express from 'express';
import { addPost, deletePost, getPosts } from '../controllers/post.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', addPost);
router.delete('/:id', deletePost);
// router.put('/:id', updatePost);


// // lectura provisoria de data from 'json'
// router.get('/post', (req, res) => {
//     res.json(Dposts);
// });



export default router;
//-------------






// import express from "express";
// import { } from "../controllers/post";

// const router = express.Router();

// router.get("",); 

// export default router;