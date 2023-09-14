import express from 'express';
import { addPost, deletePost, getPost, getPosts, getPostsForUser, updatePost } from '../controllers/post.js';

const router = express.Router();
router.get( '/', getPosts );
router.get( '/:id', getPost );
router.get( '/user/:uid', getPostsForUser );
router.post( '/', addPost );
router.delete( '/:id', deletePost );
router.put( '/update/:id', updatePost );

export default router;
