import { prisma } from '../../prisma/client';
import { omitPassword, User } from './users.types';

/**
 * Service for managing user-related operations.
 * 
 * @property getAll - Retrieves all users from the database, omitting their passwords.
 * @property getById - Retrieves a user by their unique ID, omitting the password.
 */
export const usersService = {
  /**
   * Retrieves all users from the database, omitting their passwords.
   * @returns An object containing an array of users without passwords.
   */
  async getAll(): Promise<{ users: User[] }> {
    const users = await prisma.user.findMany();
    return { users: users.map(omitPassword) };
  },
  
  /**
   * Retrieves a user by their unique ID, omitting the password.
   * @param id - The unique identifier of the user.
   * @returns An object containing the user without password or null if not found.
   */
  async getById(id: number): Promise<{ user: User | null }> {
    const user = await prisma.user.findUnique({ where: { id } });
    return { user: user ? omitPassword(user) : null };
  }
};