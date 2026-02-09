import { Router } from 'express';
import * as controller from './products.controller';
import { authMiddleware } from '../../middleware/authMiddleware';
import { validateRequest } from '../../middleware/validateRequest';
import {
  findProductSchema,
  getProductRecommendationsSchema,
  getProductsSchema,
  listProductsSchema,
} from './products.schema';

const router = Router();

router.get(
  '/',
  authMiddleware,
  validateRequest(listProductsSchema),
  controller.getAll,
);
router.get(
  '/:id',
  authMiddleware,
  validateRequest(getProductsSchema),
  controller.getById,
);
router.get(
  '/find/:nameSlug',
  authMiddleware,
  validateRequest(findProductSchema),
  controller.getByNameSlug,
);
router.get(
  '/:id/recommendations',
  authMiddleware,
  validateRequest(getProductRecommendationsSchema),
  controller.getByIdWithRecommendations,
);

export default router;
