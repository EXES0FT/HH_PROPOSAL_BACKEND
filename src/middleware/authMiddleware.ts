import { Request, Response, NextFunction } from 'express';
import { JwtTokenDataSchema, verifyToken } from '../utils/jwt';
import { prisma } from '../prisma/client';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: 'Missing token' });

  const token = header.split(' ')[1];
  let defaultErrorMessage = 'Invalid token';
  try {
    const jwtPayload = verifyToken(token);
    if (typeof jwtPayload !== 'object' || jwtPayload === null) {
      return res.status(401).json({ message: defaultErrorMessage });
    }

    let jwtPayloadValid = JwtTokenDataSchema.parse(jwtPayload);
    if (!jwtPayloadValid) {
      return res.status(401).json({ message: defaultErrorMessage });
    }

    const user = await prisma.user.findUnique({
      where: { id: jwtPayload.id, username: jwtPayload.username },
    });

    if (!user) {
      return res.status(401).json({ message: defaultErrorMessage });
    }

    if (!req.body) req.body = {};
    req.body.accessToken = token;
    next();
  } catch (err) {
    return res.status(401).json({ message: defaultErrorMessage + err });
  }
};
