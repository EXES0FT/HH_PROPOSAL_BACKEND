import { Request, Response } from 'express';

export type LoginRequest = Request<{ username: string; password: string }>;
export type LoginResponse = Response<{ accessToken: string; user: any }>;

export type RefreshRequest = Request<{ refreshToken: string }>;
export type RefreshResponse = Response<{ accessToken: string }>;

export type ProfileResponse = Response<{ user: any }>