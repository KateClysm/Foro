import express from 'express';
import router from './routes/forumRoutes.js' 
import cors from 'cors';

const app = express();
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


app.use('/apiforum', router);

app.get('/', (req, res) => {
  res.send('Backend conectado y funcionando');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
