import { Request, Response } from 'express';
import { RecommendationUsage } from '@prisma/client';

export type RecommendationUsagesRequest = Request<
  {
    id?: string;
  },
  {},
  {
    confirmed_by: number;
    recommendation_usages: RecommendationUsage[] | [];
  }
>;
export type RecommendationUsagesResponse = Response<{
  recommendationUsages?: RecommendationUsage[];
  recommendationUsage?: RecommendationUsage | null;
  message?: string;
}>;
