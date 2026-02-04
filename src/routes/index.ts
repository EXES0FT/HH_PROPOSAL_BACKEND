import { Router } from 'express';
import authRouter from '../modules/auth/auth.router';
import usersRouter from '../modules/users/users.router';
import customersRouter from '../modules/customers/customers.router';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/customers', customersRouter);

export default router;
