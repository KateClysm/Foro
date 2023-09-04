import express from 'express';
import authRoutes from './routes/auth';
import postRoutes from './routes/posts';
import likesRoutes from './routes/likes';
import commentRoutes from './routes/comments';

const app = express();
app.use(express.json());

// ROUTES
app.use('/apiForum/auth', authRoutes);
app.use('/apiForum/posts', postRoutes);
app.use('/apiForum/likes', likesRoutes);
app.use('/apiForum/comments', commentRoutes);

// test server => remove
app.get('/test', (req, res) => {
    res.json('hello server')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${PORT}`);
})