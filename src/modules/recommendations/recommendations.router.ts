import { Router } from 'express';
import * as controller from './recommendations.controller';
import { authMiddleware } from '../../middleware/authMiddleware';
import { validateRequest } from '../../middleware/validateRequest';
import { createRecommendationSchema, getRecommendationsSchema, listRecommendationsSchema } from './recommendations.schema';

const router = Router();

router.get('/', authMiddleware, validateRequest(listRecommendationsSchema), controller.getAll);
router.get('/:id', authMiddleware, validateRequest(getRecommendationsSchema), controller.getById);
router.post('/', authMiddleware, validateRequest(createRecommendationSchema), controller.create);

export default router;
