import { Request, Response } from 'express';
import { RecommendationUsage } from '@prisma/client';

export type RecommendationUsagesRequest = Request<{
    id?: string;
}, {}, {
    recommendation_id?: number;
    order_item_id?: string;
    confirmed_by?: number;
    is_rec_by_sales?: boolean;
    is_influenced?: boolean;
}>;
export type RecommendationUsagesResponse = Response<{
    recommendationUsages?: RecommendationUsage[];
    recommendationUsage?: RecommendationUsage | null;
    message?: string;
}>;
