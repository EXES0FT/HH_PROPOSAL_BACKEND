import { usersService } from './users.service';
import { UsersRequest, UsersResponse } from './users.types';

export const getAll = async (req: UsersRequest, res: UsersResponse) => {
  const result = await usersService.getAll();
  return res.json(result);
};

export const getById = async (req: UsersRequest, res: UsersResponse) => {
  const userId = req.params.id;
  if (!userId) {
    return res.status(400).json({ message: 'Invalide userId!' });
  }
  const result = await usersService.getById(Number(userId));
  return res.json(result);
};
