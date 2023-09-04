import express from 'express';
import Dposts from '../data/Dposts.js';

const router = express.Router();

router.get('/post', (req, res) => {
    res.json(Dposts);
});



export default router;