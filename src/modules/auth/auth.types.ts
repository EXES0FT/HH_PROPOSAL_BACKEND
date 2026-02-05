import { Request, Response } from 'express';
import { User } from '../users/users.types';

export type LoginRequest = Request<{}, {}, { username: string; password: string }>;
export type LoginResponse = Response<{ accessToken?: string; user?: User, message?: string }>;

export type RefreshRequest = Request<{}, {}, { accessToken: string }>;
export type RefreshResponse = Response<{ accessToken?: string, message?: string }>;

export type ProfileRequest = Request<{}, {}, { accessToken: string }>;
export type ProfileResponse = Response<{ user?: User, message?: string }>