import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import { prisma } from '../prisma/client';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: 'Missing token' });

  const token = header.split(' ')[1];
  let defaultErrorMessage = 'Invalid token';
  try {
    const verifiedToken = verifyToken(token);
    const jwtPayload = typeof verifiedToken === 'object' && 'id' in verifiedToken ? verifiedToken.id : undefined;
    if (!jwtPayload) {
      return res.status(401).json({ message: defaultErrorMessage });
    }

    const user = prisma.users.findUnique({ where: { id: jwtPayload.id, username: jwtPayload.username } });
    if (!user) return res.status(401).json({ message: defaultErrorMessage });
    req.body.accessToken = token;
    next();
  } catch(err) {
    return res.status(401).json({ message: defaultErrorMessage + err });
  }
};