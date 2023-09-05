import express from 'express';
import userRoutes from "./routes/users";
import authRoutes from './routes/auth';
import postRoutes from './routes/posts';
import likesRoutes from './routes/likes';
import commentRoutes from './routes/comments';
import cors from 'cors';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

// Configurar CORS con opciones específicas
const corsOptions = {
    origin: 'http://localhost:5173', // Cambia esto al origen de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    // Añade el siguiente encabezado para permitir el origen específico
    allowedHeaders: 'Content-Type, Authorization',
  };
  
  app.use(cors(corsOptions));


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

