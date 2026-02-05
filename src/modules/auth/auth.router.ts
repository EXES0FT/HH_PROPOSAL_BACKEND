import { Router } from 'express';
import * as controller from './auth.controller';
import { authMiddleware } from '../../middleware/authMiddleware';
import { loginSchema, profileSchema, refreshSchema } from './auth.schema';
import { validateRequest } from '../../middleware/validateRequest';

const router = Router();

router.post('/login', validateRequest(loginSchema), controller.login);
router.post('/refresh', authMiddleware, validateRequest(refreshSchema), controller.refresh);
router.get('/profile', authMiddleware, validateRequest(profileSchema), controller.profile);

export default router;
