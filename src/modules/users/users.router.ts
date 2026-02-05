import { Router } from 'express';
import * as controller from './users.controller';
import { authMiddleware } from '../../middleware/authMiddleware';
import { validateRequest } from '../../middleware/validateRequest';
import { listUsersSchema, getUsersSchema } from './users.schema';

const router = Router();

router.get('/', authMiddleware, validateRequest(listUsersSchema), controller.getAll);
router.get('/:id', authMiddleware, validateRequest(getUsersSchema), controller.getById);

export default router;
