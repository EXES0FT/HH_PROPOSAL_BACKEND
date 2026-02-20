import { recommendationsService } from './recommendations.service';
import {
  RecommendationsRequest,
  RecommendationsResponse,
} from './recommendations.types';

export const getAll = async (
  req: RecommendationsRequest,
  res: RecommendationsResponse,
) => {
  const page = req.query.page ? Number(req.query.page) : 1;
  const limit = req.query.limit ? Number(req.query.limit) : 10;
  const result = await recommendationsService.getAll(page, limit);
  return res.json(result);
};

export const getById = async (
  req: RecommendationsRequest,
  res: RecommendationsResponse,
) => {
  const recommendationId = req.params.id;
  const result = await recommendationsService.getById(Number(recommendationId));
  return res.json(result);
};

export const create = async (
  req: RecommendationsRequest,
  res: RecommendationsResponse,
) => {
  const recommendations = (req.body.recommendations ?? []).map((rec: any) => ({
    ...rec,
    recommendation_price:
      typeof rec.recommendation_price === 'object' &&
      typeof rec.recommendation_price.toNumber === 'function'
        ? rec.recommendation_price.toNumber()
        : rec.recommendation_price,
  }));
  const client_id = req.body.client_id;
  const recommended_by = req.body.recommended_by;
  const result = await recommendationsService.create({
    client_id,
    recommended_by,
    recommendations,
  });
  return res.json(result);
};
