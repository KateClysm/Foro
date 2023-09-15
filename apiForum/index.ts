import express from 'express';
import userRoutes from "./routes/users";
import authRoutes from './routes/auth';
import postRoutes from './routes/posts';
import likesRoutes from './routes/likes';
import commentRoutes from './routes/comments';
import cors from 'cors'; 
import cookieParser from 'cookie-parser';
import multer from "multer";
import { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 8800; 

//middlewares
app.use(cookieParser());
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type, Authorization',
};
app.use(cors(corsOptions));



// app.use('/apiForum/uploads/posts', multerRoutes);
// app.use('/apiForum/uploads/users/profilePic', multerRoutes);
// app.use('/apiForum/uploads/users/coverImage', multerRoutes);


// ROUTES utilización de las rutas importadas
app.use('/apiForum/users', userRoutes);
app.use('/apiForum/auth', authRoutes);
app.use('/apiForum/posts', postRoutes);
app.use('/apiForum/likes', likesRoutes);
app.use('/apiForum/comments', commentRoutes);

// test server => remove
app.get('/apiForum', (req, res) => {
    res.json('hello server')
})

app.listen(PORT, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${PORT}`);
})


//multer
const storageForPostsPictures = multer.diskStorage({
  destination: function (req:Request, file, cb) {
    cb(null, '../para-front/public/uploads/posts');
  },
  filename: function (req:Request, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const uploadPostPicture = multer({ storage: storageForPostsPictures });
app.post('/apiForum/uploads/posts', uploadPostPicture.single('file'), (req, res) => {
  const file = req.file;
  if (file) {
    return res.status(200).json(file.filename);
  }
  return res.status(400).json({ message: 'No file uploaded' });
});


const storageForProfilePictures = multer.diskStorage({
  destination: function (req:Request, file, cb) {
    cb(null, '../para-front/public/uploads/users/profilePic');
  },
  filename: function (req:Request, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const uploadProfilePicture = multer({ storage: storageForProfilePictures });
app.post('/apiForum/uploads/users/profilePic', uploadProfilePicture.single('file'), (req, res) => {
  const file = req.file;
  if (file) {
    return res.status(200).json(file.filename);
  }
  return res.status(400).json({ message: 'No file uploaded' });
});


const storageForCoverPictures = multer.diskStorage({
  destination: function (req:Request, file, cb) {
    cb(null, '../para-front/public/uploads/users/coverPic');
  },
  filename: function (req:Request, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const uploadCoverPicture = multer({ storage: storageForCoverPictures });
app.post('/apiForum/uploads/users/coverPic', uploadCoverPicture.single('file'), (req, res) => {
  const file = req.file;
  if (file) {
    return res.status(200).json(file.filename);
  }
  return res.status(400).json({ message: 'No file uploaded' });
});