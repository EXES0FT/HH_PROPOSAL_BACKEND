import { recommendationUsagesService } from './recommendationUsages.service';
import { RecommendationUsagesRequest, RecommendationUsagesResponse } from './recommendationUsages.types';

export const getAll = async (req: RecommendationUsagesRequest, res: RecommendationUsagesResponse) => {
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 10;
    const result = await recommendationUsagesService.getAll(page, limit);
    return res.json(result);
};

export const getById = async (req: RecommendationUsagesRequest, res: RecommendationUsagesResponse) => {
    const recommendationUsageId = req.params.id;
    const result = await recommendationUsagesService.getById(Number(recommendationUsageId));
    return res.json(result);
};

export const create = async (req: RecommendationUsagesRequest, res: RecommendationUsagesResponse) => {
    const recommendationUsageData = req.body;
    const result = await recommendationUsagesService.create(recommendationUsageData);
    return res.json(result);
};