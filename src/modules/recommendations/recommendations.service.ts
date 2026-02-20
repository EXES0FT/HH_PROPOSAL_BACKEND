import { Recommendation } from '@prisma/client';
import { prisma } from '../../prisma/client';

/**
 * Service object for handling recommendation-related operations.
 *
 * @property getAll - Retrieves all recommendations.
 * @property getById - Retrieves a recommendation by their unique ID.
 */
export const recommendationsService = {
  /**
   * Retrieves all recommendations from the database.
   * @returns An object containing an array of recommendations.
   */
  async getAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ recommendations: Recommendation[] }> {
    const recommendations = await prisma.recommendation.findMany({
      // skip: (page - 1) * limit,
      // take: limit,
    });
    return { recommendations };
  },

  /**
   * Retrieves a recommendation by their unique arukod.
   * @param arukod - The unique identifier of the recommendation.
   * @returns An object containing the recommendation or null if not found.
   */
  async getById(
    id: number,
  ): Promise<{ recommendation: Recommendation | null }> {
    const recommendation = await prisma.recommendation.findUnique({
      where: { id: id },
    });
    return { recommendation };
  },

  async create(recommendationData: {
    client_id: number;
    recommended_by: number;
    recommendations: { arukod: number; recommendation_price: string }[];
  }): Promise<{ recommendations: Recommendation[] | [] }> {
    //Check customer exists
    const customer = await prisma.client.findUnique({
      where: { ID: recommendationData.client_id },
    });
    if (!customer) {
      throw { status: 400, message: 'Customer not found' };
    }

    const recommendationResults: Recommendation[] = [];
    for (const recommendation of recommendationData.recommendations) {
      //Check recommended product exists
      const recommendedProduct = await prisma.item.findUnique({
        where: { arukod: recommendation.arukod },
      });
      if (!recommendedProduct) {
        throw {
          status: 400,
          message: `Recommended product with arukod ${recommendation.arukod} not found`,
        };
      }
      const saveData = {
        client_id: recommendationData.client_id,
        arukod: recommendation.arukod,
        recommended_by: recommendationData.recommended_by,
        recommendation_price: recommendation.recommendation_price,
      };
      const saveResult = await prisma.recommendation.create({
        data: saveData,
      });

      recommendationResults.push(saveResult);
    }

    return { recommendations: recommendationResults };
  },
};
