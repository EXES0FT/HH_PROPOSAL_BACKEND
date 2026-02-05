import { Router } from 'express';
import * as controller from './reports.controller';
import { authMiddleware } from '../../middleware/authMiddleware';
import { getReportsSummarySchema, getReportsByUserSchema } from './reports.schema';
import { validateRequest } from '../../middleware/validateRequest';

const router = Router();

router.get('/', authMiddleware, validateRequest(getReportsSummarySchema), controller.summary);
router.get('/users', authMiddleware, validateRequest(getReportsByUserSchema), controller.getGroupByUsers);
router.get('/users/:id', authMiddleware, validateRequest(getReportsByUserSchema), controller.getByUserId);

export default router;
