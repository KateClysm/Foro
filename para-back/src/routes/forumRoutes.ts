import { json } from 'body-parser';
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Estás en la ruta /apiforum');
});

router.get('/posts', (req, res) => {
  const posts = [{ id: 1, title: 'Mi primera publicación' }, /* ... */ ];
  res.json(posts);
});

export default router;