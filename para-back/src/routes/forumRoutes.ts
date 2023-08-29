import express from 'express';
import dbConnection from '../../db.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('El BackEnd está funcionando!');
});

router.get('/posts', (req, res) => {
  const q = "SELECT * FROM posts";
  dbConnection.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

export default router;