import { Request, Response } from 'express';
import { Recommendation } from '@prisma/client';

export type RecommendationsRequest = Request<{
    id?: string;
    arukod?: number,
    client_id?: number,
    recommended_by?: number,
    recommendation_price?: number
}>;
export type RecommendationsResponse = Response<{
    recommendations?: Recommendation[];
    recommendation?: Recommendation | null;
    message?: string;
}>;
