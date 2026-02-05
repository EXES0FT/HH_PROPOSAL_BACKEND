import { reportsService } from './reports.service';
import { ReportsRequest, ReportsResponse } from './reports.types';

export const summary = async (req: ReportsRequest, res: ReportsResponse) => {
    const result = await reportsService.summary();
    return res.json(result);
};

export const getGroupByUsers = async (req: ReportsRequest, res: ReportsResponse) => {
    const result = await reportsService.getGroupByUsers();
    return res.json(result);
};

export const getByUserId = async (req: ReportsRequest, res: ReportsResponse) => {
    const userId = req.params.id;
    const result = await reportsService.getByUserId(Number(userId));
    return res.json(result);
};