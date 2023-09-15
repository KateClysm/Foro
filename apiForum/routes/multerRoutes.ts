// import express from 'express';
// import { uploadPosts, uploadProfilePic, uploadCoverImage } from '../controllers/multerConfig'; // Importa las instancias de multer

// const router = express.Router();

// // Endpoint para subir archivos de posts
// router.post('/posts', uploadPosts.single('file'), (req, res) => {
//   const file = req.file;
//   if (file) {
//     return res.status(200).json(file.filename);
//   }
//   return res.status(400).json({ message: 'No file uploaded' });
// });

// // Endpoint para subir archivos de perfil
// router.post('/users/profilePic', uploadProfilePic.single('file'), (req, res) => {
//   const file = req.file;
//   if (file) {
//     return res.status(200).json(file.filename);
//   }
//   return res.status(400).json({ message: 'No file uploaded' });
// });

// // Endpoint para subir archivos de portada
// router.post('/users/coverImage', uploadCoverImage.single('file'), (req, res) => {
//   const file = req.file;
//   if (file) {
//     return res.status(200).json(file.filename);
//   }
//   return res.status(400).json({ message: 'No file uploaded' });
// });

// export default router;