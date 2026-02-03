import { Router } from 'express';
import * as controller from './auth.controller';
import { authMiddleware } from '../../middleware/authMiddleware';

const router = Router();

router.post('/login', controller.login);
router.post('/refresh', authMiddleware, controller.refresh);
router.get('/profile', authMiddleware, controller.profile);

export default router;
