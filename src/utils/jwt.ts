import { env } from '../config/env';
import jwt, { SignOptions } from 'jsonwebtoken';

const expiresIn: string = env.jwtExpiresIn || '7d';
const jwtSecret: string = env.jwtSecret;

export const signToken = (payload: Record<string, any>) =>
  jwt.sign(payload, jwtSecret, { expiresIn } as SignOptions);

export const verifyToken = (token: string) =>
  jwt.verify(token, jwtSecret);