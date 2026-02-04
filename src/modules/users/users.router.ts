import { Router } from 'express';
import * as controller from './users.controller';
import { authMiddleware } from '../../middleware/authMiddleware';

const router = Router();

router.get('/', authMiddleware, controller.getAll);
router.get('/:id', authMiddleware, controller.getById);

export default router;
