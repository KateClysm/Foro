import express from 'express';
import router from './src/routes/forumRoutes.js' 

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});