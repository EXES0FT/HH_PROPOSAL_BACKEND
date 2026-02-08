import { Router } from 'express';
import * as controller from './customers.controller';
import { authMiddleware } from '../../middleware/authMiddleware';
import {
    listCustomersSchema, getCustomerRecommendationsSchema,
    getCustomersSchema, findCustomersSchema
} from './customers.schema';
import { validateRequest } from '../../middleware/validateRequest';

const router = Router();

router.get('/', authMiddleware, validateRequest(listCustomersSchema), controller.getAll);
router.get('/:id', authMiddleware, validateRequest(getCustomersSchema), controller.getById);
router.get('/find/:nameSlug', authMiddleware, validateRequest(findCustomersSchema), controller.getByNameSlug);
router.get(
    '/:id/recommendations',
    authMiddleware,
    validateRequest(getCustomerRecommendationsSchema),
    controller.getByIdWithRecommendations
);

export default router;
