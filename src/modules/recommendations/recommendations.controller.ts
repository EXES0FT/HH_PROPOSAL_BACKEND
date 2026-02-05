import { recommendationsService } from './recommendations.service';
import { RecommendationsRequest, RecommendationsResponse } from './recommendations.types';

export const getAll = async (req: RecommendationsRequest, res: RecommendationsResponse) => {
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 10;
    const result = await recommendationsService.getAll(page, limit);
    return res.json(result);
};

export const getById = async (req: RecommendationsRequest, res: RecommendationsResponse) => {
    const recommendationId = req.params.id;
    const result = await recommendationsService.getById(Number(recommendationId));
    return res.json(result);
};

export const create = async (req: RecommendationsRequest, res: RecommendationsResponse) => {
    const recommendationData = req.body;
    const result = await recommendationsService.create(recommendationData);
    return res.json(result);
};