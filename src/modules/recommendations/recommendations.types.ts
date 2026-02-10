import { Request, Response } from 'express';
import { Recommendation } from '@prisma/client';

export type RecommendationsRequest = Request<
  {
    id?: string;
  },
  {},
  {
    client_id: number;
    arukod: number;
    recommended_by: number;
    recommendations: Recommendation[] | [];
  }
>;
export type RecommendationsResponse = Response<{
  recommendations?: Recommendation[] | [];
  recommendation?: Recommendation | null;
  message?: string;
}>;
