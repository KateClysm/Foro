import express from 'express';
import { getPostsByCategory, getPostsForHome } from '../controllers/post.js';

const router = express.Router();
router.get('/home', getPostsForHome );
router.get('/categories', getPostsByCategory );

// // lectura provisoria de data from 'json'
// router.get('/post', (req, res) => {
//     res.json(Dposts);
// });

export default router;
