import { Request, Response } from 'express';
import { User as PrismaUser } from '@prisma/client';

export type User = Omit<PrismaUser, 'password'>;
export type UsersRequest = Request<{ id?: number}>;
export type UsersResponse = Response<{ users?: User[]; user?: User | null; message?: string }>;

export function omitPassword(user: PrismaUser): User {
  // eslint-disable-next-line no-unused-vars
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}