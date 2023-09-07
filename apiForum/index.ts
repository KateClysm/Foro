import express from 'express';
import userRoutes from "./routes/users";
import authRoutes from './routes/auth';
import postRoutes from './routes/posts';
import likesRoutes from './routes/likes';
import commentRoutes from './routes/comments';
import cors from 'cors'; // mecanismo de seguridad implementado en los navegadores web para controlar las solicitudes HTTP entre diferentes dominios o orígenes.
import cookieParser from 'cookie-parser'; //facilita la manipulación de cookies en una aplicación 
import multer from 'multer'; // carga de archivos en server

const app = express();
const PORT = process.env.PORT || 8800; //acá van a ir todas nuestras requests

//middlewares
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type, Authorization',
};
app.use(cors(corsOptions));


// uso de multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+file.originalname)
    }
});

const upload = multer({ storage });
app.post('/apiForum/upload', upload.single('file'), function (req, res) {
    const file = req.file;
    res.status(200).json(file ? file.filename : 'null');
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

