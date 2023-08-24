// controllers/auth.ts
import { Request, Response } from 'express';

export const registerController = (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  // Lógica de registro utilizando TypeScript
};

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body;
  // Lógica de inicio de sesión utilizando TypeScript
};