// routes.ts
import express from 'express';
import { registerController, loginController } from './controllers/auth'; // Asegúrate de crear estos controladores

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);

export default router;