// backend/src/routes/forumRoutes.ts
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('¡Hola desde el servidor Express!');
});

// Ruta para obtener todas las publicaciones
router.get('/posts', (req, res) => {
  console.log('¡Hola desde el servidor Express! Estas en la ruta http://localhost:3001/posts'); //esto se visualiza en la consola de node no en el navegador
  
  // Aquí debes obtener los datos de tu base de datos o fuente de datos
  const posts = [{ id: 1, title: 'Mi primera publicación' }, /* ... */ ];
  res.json(posts);
});

export default router;