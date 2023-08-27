import express from 'express';
import cors from 'cors';
import forumRoutes from './routes/forumRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Estás en la ruta base del servidor');
});

app.use('/apiforum', forumRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});