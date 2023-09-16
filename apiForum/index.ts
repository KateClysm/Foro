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
const PORT = process.env.PORT || 8800; //acá van a ir todas nuestras requests

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


//multer
const storage = multer.diskStorage({
  destination: function (req:Request, file, cb){
    cb(null, '../para-front/public/upload')
  },
  filename: function (req:Request, file, cb){
    cb(null, Date.now()+file.originalname);
  }
});
const upload = multer({ storage });
app.post('/apiForum/upload', upload.single('file'), (req: Request, res: Response) => { 
  const file = req.file;
  if(file){
    return res.status(200).json(file.filename)
  }
})


// ROUTES utilización de las rutas importadas
app.use('/apiForum/users', userRoutes);
app.use('/apiForum/auth', authRoutes);
app.use('/apiForum/posts', postRoutes);
app.use('/apiForum/likes', likesRoutes);
app.use('/apiForum/comments', commentRoutes);

// test server => remove
app.get('/test', (req, res) => {
    res.json('hello server')
})

app.listen(PORT, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${PORT}`);
})