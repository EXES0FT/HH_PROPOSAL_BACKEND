import { Request, Response } from 'express';
import { User } from '../../types/user';

export type LoginRequest = Request<{ username: string; password: string }>;
export type LoginResponse = Response<{ accessToken?: string; user?: User, message?: string }>;

export type RefreshRequest = Request<{ refreshToken: string }>;
export type RefreshResponse = Response<{ accessToken?: string, message?: string }>;

export type ProfileRequest = Request<{ accessToken: string; }>;
export type ProfileResponse = Response<{ user?: User, message?: string }>