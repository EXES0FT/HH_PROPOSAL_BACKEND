import { authService } from './auth.service';
import {
  LoginRequest, LoginResponse,
  ProfileRequest, ProfileResponse,
  RefreshRequest, RefreshResponse,
} from './auth.types';

export const login = async (req: LoginRequest, res: LoginResponse) => {
  const { username, password } = req.body;
  const result = await authService.login({ username, password });
  return res.json(result);
};

export const refresh = async (req: RefreshRequest, res: RefreshResponse) => {
  const { accessToken } = req.body;
  const result = await authService.refresh({ accessToken: accessToken });
  res.json(result);
};

export const profile = async (req: ProfileRequest, res: ProfileResponse) => {
  const { accessToken } = req.body;
  const result = await authService.profile({ accessToken: accessToken });
  res.json(result);
};




