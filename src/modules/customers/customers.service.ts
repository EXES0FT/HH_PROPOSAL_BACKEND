import { prisma } from '../../prisma/client';
import { Customer } from './customers.types';

/**
 * Service object for handling customer-related operations.
 *
 * @property getAll - Retrieves all customers.
 * @property getById - Retrieves a customer by their unique ID.
 * @property getByNameSlug - Retrieves customers whose names contain the specified slug.
 * @property getByIdWithRecommendations - Retrieves a customer by ID along with their recommendations.
 */
export const customersService = {
  /**
   * Retrieves all customers from the database.
   * @returns An object containing an array of customers.
   */
  async getAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ customers: Customer[] }> {
    const customers = await prisma.client.findMany({
      // skip: (page - 1) * limit,
      // take: limit,
      select: {
        name: true,
        ID: true,
        address_city: true,
        address_zip: true,
        address_combined: true,
      },
      where: { del: false },
    });
    return { customers };
  },

  /**
   * Retrieves a customer by their unique ID.
   * @param id - The unique identifier of the customer.
   * @returns An object containing the customer or null if not found.
   */
  async getById(id: number): Promise<{ customer: Customer | null }> {
    const customer = await prisma.client.findUnique({ where: { ID: id } });
    return { customer };
  },

  /**
   * Retrieves customers whose names contain the specified slug.
   * @param slug - The substring to search for in customer names.
   * @returns An object containing an array of matching customers.
   */
  async getByNameSlug(slug: string): Promise<{ customers: Customer[] }> {
    const customers = await prisma.client.findMany({
      where: {
        name: {
          contains: slug,
        },
      },
    });
    return { customers };
  },

  /**
   * Retrieves a customer by ID along with their recommendations.
   * @param id - The unique identifier of the customer.
   * @returns An object containing the customer with recommendations or null if not found.
   */
  async getByIdWithRecommendations(
    id: number,
  ): Promise<{ customer: Customer | null }> {
    const customer = await prisma.client.findUnique({
      where: { ID: id },
      include: { recommendations: true },
    });
    return { customer };
  },
};
