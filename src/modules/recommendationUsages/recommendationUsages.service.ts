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
  async create(
    recommendationUsageData: any,
  ): Promise<{ recommendationUsage: RecommendationUsage | null }> {
    const { recommendation_id, order_item_id, confirmed_by, is_influenced } =
      recommendationUsageData;

    //Check if recommendation exists
    const recommendation = await prisma.recommendation.findUnique({
      where: { id: recommendation_id },
    });
    if (!recommendation) {
      throw { status: 400, message: 'Recommendation not found' };
    }

    //Check if order item exists
    const orderItem = await prisma.orderItem.findUnique({
      where: { unikazon: order_item_id },
    });
    if (!orderItem) {
      throw { status: 400, message: 'Order item not found' };
    }

    //Check if user exists
    const user = await prisma.user.findUnique({ where: { id: confirmed_by } });
    if (!user) {
      throw { status: 400, message: 'User not found' };
    }

    const result = await prisma.recommendationUsage.create({
      data: {
        recommendation: { connect: { id: recommendation_id } },
        orderItem: { connect: { unikazon: order_item_id } },
        user: { connect: { id: confirmed_by } },
        is_influenced,
      },
    });
    return { recommendationUsage: result };
  },
};
