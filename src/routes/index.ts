import { Router } from 'express';
import authRouter from '../modules/auth/auth.router';
import usersRouter from '../modules/users/users.router';
import customersRouter from '../modules/customers/customers.router';
import productsRouter from '../modules/products/products.router';
import recommendationsRouter from '../modules/recommendations/recommendations.router';
import recommendationUsagesRouter from '../modules/recommendationUsages/recommendationUsages.router';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/customers', customersRouter);
router.use('/products', productsRouter);
router.use('/recommendations', recommendationsRouter);
router.use('/recommendation-usages', recommendationUsagesRouter);

export default router;
