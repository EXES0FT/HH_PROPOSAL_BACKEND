import { authService } from './auth.service';
import { LoginRequest, LoginResponse, ProfileResponse, RefreshRequest, RefreshResponse } from './auth.types';

export const login = async (req: LoginRequest, res: LoginResponse) => {
  const { username, password } = req.body;
  const result = await authService.login({ username, password });
  return res.json(result);
};

export const refresh = async (req: RefreshRequest, res: RefreshResponse) => {
  const { refreshToken } = req.body;
  const result = await authService.refresh({ refreshToken });
  res.json(result);
};

export const profile = async (res: ProfileResponse) => {
  const result = await authService.profile();
  res.json(result);
};




