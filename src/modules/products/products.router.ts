import { Router } from 'express';
import * as controller from './products.controller';
import { authMiddleware } from '../../middleware/authMiddleware';
import { validateRequest } from '../../middleware/validateRequest';
import { getProductRecommendationsSchema, getProductsSchema, listProductsSchema } from './products.schema';

const router = Router();

router.get('/', authMiddleware, validateRequest(listProductsSchema), controller.getAll);
router.get('/:id', authMiddleware, validateRequest(getProductsSchema), controller.getById);
router.get(
    '/:id/recommendations',
    authMiddleware,
    validateRequest(getProductRecommendationsSchema),
    controller.getByIdWithRecommendations
);

export default router;
