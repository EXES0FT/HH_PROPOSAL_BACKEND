import { Router } from 'express';
import * as controller from './customers.controller';
import { authMiddleware } from '../../middleware/authMiddleware';

const router = Router();

router.get('/', authMiddleware, controller.getAll);
router.get('/:id', authMiddleware, controller.getById);
router.get('/find/:nameSlug', authMiddleware, controller.getByNameSlug);
router.get('/:id/recommendations', authMiddleware, controller.getByIdWithRecommendations);

export default router;
