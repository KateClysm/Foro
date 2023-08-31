import express from 'express';
import Dposts from '../data/Dposts.js';
// import dbConnection from '../../db.js';

const router = express.Router();

// router.get('/', (req, res) => {
//   res.json('El BackEnd está funcionando!');
// });

// router.get('/posts', (req, res) => {
//   const q = "SELECT * FROM posts";
//   dbConnection.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });
    router.get('/', (req, res) => {
        res.send('Te encuentras en la ruta /apiforum');
    });

    router.get('/posts', (req, res) => {
        res.json(Dposts);
    });

    

export default router;