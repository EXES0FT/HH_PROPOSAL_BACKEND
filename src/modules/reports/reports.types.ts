import { Request, Response } from 'express';

export type Report = {
    totalRecommendations?: number;

};
export type ReportsRequest = Request<{ id?: number }>;
export type ReportsResponse = Response<{
    reportData?: Report;
    message?: string;
}>;
