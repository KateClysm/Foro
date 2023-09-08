import express from 'express';
import { addPost, getPosts} from '../controllers/post.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', addPost);
// router.delete('/:id', deletePost);
// router.put('/:id', updatePost);


// // lectura provisoria de data from 'json'
// router.get('/post', (req, res) => {
//     res.json(Dposts);
// });

export default router;
