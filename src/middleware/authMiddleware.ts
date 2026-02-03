import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: 'Missing token' });

  const token = header.split(' ')[1];

  try {
    const decodedToken = verifyToken(token);
    // @ts-ignore
    req.user = decodedToken;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};