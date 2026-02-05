import { usersService } from './users.service';
import { UsersRequest, UsersResponse } from './users.types';

export const getAll = async (req: UsersRequest, res: UsersResponse) => {
  const page = req.query.page ? Number(req.query.page) : 1;
  const limit = req.query.limit ? Number(req.query.limit) : 10;
  const result = await usersService.getAll(page, limit);
  return res.json(result);
};

export const getById = async (req: UsersRequest, res: UsersResponse) => {
  const userId = req.params.id;
  const result = await usersService.getById(Number(userId));
  return res.json(result);
};
