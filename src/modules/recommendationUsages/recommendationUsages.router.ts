import { Router } from 'express';
import * as controller from './recommendationUsages.controller';
import { authMiddleware } from '../../middleware/authMiddleware';
import { validateRequest } from '../../middleware/validateRequest';
import {
    getRecommendationUsagesSchema,
    listRecommendationUsagesSchema,
    createRecommendationUsageSchema,
} from './recommendationUsages.schema';

const router = Router();

router.get('/', authMiddleware, validateRequest(listRecommendationUsagesSchema), controller.getAll);
router.get('/:id', authMiddleware, validateRequest(getRecommendationUsagesSchema), controller.getById);
router.post('/', authMiddleware, validateRequest(createRecommendationUsageSchema), controller.create);

export default router;
