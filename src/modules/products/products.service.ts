import { prisma } from '../../prisma/client';
import { Product } from './products.types';

/**
 * Service object for handling product-related operations.
 *
 * @property getAll - Retrieves all products.
 * @property getById - Retrieves a product by their unique ID.
 * @property getByIdWithRecommendations - Retrieves a product by ID along with their recommendations.
 */
export const productsService = {
  /**
   * Retrieves all products from the database.
   * @returns An object containing an array of products.
   */
  async getAll(page: number = 1, limit: number = 10): Promise<{ products: Product[] }> {
    const products = await prisma.item.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
    return { products };
  },

  /**
   * Retrieves a product by their unique arukod.
   * @param arukod - The unique identifier of the product.
   * @returns An object containing the product or null if not found.
   */
  async getById(arukod: number): Promise<{ product: Product | null }> {
    const product = await prisma.item.findUnique({ where: { arukod: arukod } });
    return { product };
  },

  /**
   * Retrieves a product by ID along with their recommendations.
   * @param arukod - The unique identifier of the product.
   * @returns An object containing the product with recommendations or null if not found.
   */
  async getByIdWithRecommendations(arukod: number): Promise<{ product: Product | null }> {
    const product = await prisma.item.findUnique({
      where: { arukod: arukod },
      include: { recommendations: true },
    });
    return { product };
  }
};