import { prisma } from '../../prisma/client';
import { RecommendationUsage } from '@prisma/client';

/**
 * Service object for handling recommendation-usage-related operations.
 *
 * @property getAll - Retrieves all recommendationUsages.
 * @property getById - Retrieves a recommendationUsage by their unique ID.
 */
export const recommendationUsagesService = {
  /**
   * Retrieves all recommendationUsages from the database.
   * @returns An object containing an array of recommendationUsages.
   */
  async getAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ recommendationUsages: RecommendationUsage[] }> {
    const recommendationUsages = await prisma.recommendationUsage.findMany({
      // skip: (page - 1) * limit,
      // take: limit,
    });
    return { recommendationUsages };
  },

  /**
   * Retrieves a recommendationUsage by their unique ID.
   * @param id - The unique identifier of the recommendationUsage.
   * @returns An object containing the recommendationUsage or null if not found.
   */
  async getById(
    id: number,
  ): Promise<{ recommendationUsage: RecommendationUsage | null }> {
    const recommendationUsage = await prisma.recommendationUsage.findUnique({
      where: { id: id },
    });
    return { recommendationUsage };
  },
  async create(recommendationUsageData: {
    confirmed_by: number;
    recommendation_usages: {
      recommendation_id: number;
      order_item_id: string | null;
      is_influenced?: boolean;
    }[];
  }): Promise<{ recommendationUsages: RecommendationUsage[] | [] }> {
    const { confirmed_by, recommendation_usages } = recommendationUsageData;
    //Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: confirmed_by },
    });
    if (!user) {
      throw { status: 400, message: 'User not found' };
    }

    const createdRecommendationUsages: RecommendationUsage[] = [];
    for (const usage of recommendation_usages) {
      //Check if recommendation exists
      const recommendation = await prisma.recommendation.findUnique({
        where: { id: usage.recommendation_id },
      });
      if (!recommendation) {
        throw { status: 400, message: 'Recommendation not found' };
      }
      const saveData = {
        confirmed_by: confirmed_by,
        recommendation_id: usage.recommendation_id,
        order_item_id: usage.order_item_id ?? '',
        is_influenced: usage.is_influenced,
      };
      const saveResult = await prisma.recommendationUsage.create({
        data: saveData,
      });
      createdRecommendationUsages.push(saveResult);
    }
    return {
      recommendationUsages: createdRecommendationUsages,
    };
  },
};
