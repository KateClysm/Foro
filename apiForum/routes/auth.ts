import express from 'express';
import { login, logout, register } from '../controllers/auth';

const router = express.Router();

router.use('/register', register);
router.use('/login', login);
router.use('/logout', logout);


export default router;