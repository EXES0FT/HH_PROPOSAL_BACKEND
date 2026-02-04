import { env } from '../config/env';
import jwt, { SignOptions } from 'jsonwebtoken';
import { prisma } from '../prisma/client';
import { omitPassword } from '../modules/users/users.types';

const expiresIn: string = env.jwtExpiresIn || '7d';
const jwtSecret: string = env.jwtSecret;

export const signToken = (payload: Record<string, any>) =>
  jwt.sign(payload, jwtSecret, { expiresIn } as SignOptions);

export const verifyToken = (token: string) => jwt.verify(token, jwtSecret);

export const decodeToken = async (token: string) => {
  let decodedToken = jwt.decode(token);
  if (!decodedToken || typeof decodedToken !== 'object' || !('id' in decodedToken)) return {};
  const user = await prisma.user.findUnique({ where: { id: (decodedToken as any).id, username: (decodedToken as any).username } });
  if (!user) return {};
  
  return omitPassword(user);
};