import { Request, Response } from 'express';
import { Recommendation } from '@prisma/client';

export type RecommendationRequest = Request<{ id?: number, customer_id?: number }>;
export type RecommendationsResponse = Response<{
    recommendations?: Recommendation[];
    recommendation?: Recommendation | null;
    message?: string;
}>;
