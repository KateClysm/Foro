import express from 'express';
import { addPost, deletePost, getPost, getPosts, updatePost } from '../controllers/post.js';
import Dposts from '../data/Dposts.js';

const router = express.Router();
router.get( '/', getPosts );
router.get( '/:id', getPost );
router.post( '/addPost', addPost );
router.delete( '/:id', deletePost );
router.put( '/:id', updatePost );

// lectura provisoria de data from 'json'
// router.get('/post', (req, res) => {
//     res.json(Dposts);
// });

export default router;
