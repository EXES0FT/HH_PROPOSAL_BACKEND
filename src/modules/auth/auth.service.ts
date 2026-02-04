import { prisma } from '../../prisma/client';
import { comparePassword } from '../../utils/password';
import { decodeToken, signToken } from '../../utils/jwt';
import { User } from '../../types/user';

/**
 * Provides authentication-related services such as user login, token refresh, and profile retrieval.
 *
 * @property login - Authenticates a user with a username and password, returning an access token and user details.
 * @property refresh - Validates a refresh token and issues a new access token.
 * @property profile - Returns the profile information of the currently authenticated user.
 */


export const authService = {
  /**
   * Authenticates a user with the provided username and password.
   *
   * @param {Object} params
   * @param {string} params.username
   * @param {string} params.password
   * @returns {Promise<{ accessToken: string; user: User
   * @throws {Object} Error object with `status` and `message`
   */
  async login({ username, password }: { username: string; password: string }): Promise<{
    accessToken: string; 
    user: User;
  }> {
    let defaultErrorMessage = 'Invalid credentials';
    const user = await prisma.users.findFirst({ where: { username } });
    if (
      !username || !password ||
      !user || !user.username || !user.password
    ) {
      throw { status: 400, message: defaultErrorMessage };
    }

    const valid = comparePassword(password, user.password);
    if (!valid) throw { status: 400, message: defaultErrorMessage };

    const token = signToken({ id: user.id, username: user.username });
    return {
      accessToken: token,
      user: user
    };
  },

  /**
   * Refreshes the access token using a valid refresh token.
   *
   * @param {Object} params
   * @param {string} params.accessToken
   * @returns {Promise<{ accessToken: string }>}
   * @throws {Object} Error object with `status` and `message`
   */
  async refresh({ accessToken }: { accessToken: string }): Promise<{ accessToken: string; }> {
    const user = await decodeToken(accessToken);
    if (!user || !('id' in user) || !user.id || !('username' in user) || !user.username) {
      throw { status: 400, message: 'Invalid refresh token' };
    }
    const newAccesstoken = signToken({ id: user.id, username: user.username });
    return {
      accessToken: newAccesstoken
    };
  },

  /**
   * Retrieves the authenticated user's profile based on the provided access token.
   *
   * @param {Object} params - The parameters object.
   * @param {string} params.accessToken - The JWT access token of the user.
   * @returns {Promise<{ user: User }>} An object containing the user data (excluding the password).
   */
  async profile({ accessToken }: { accessToken: string }): Promise<{ user: User }> {
    const user = await decodeToken(accessToken);
    if (!user || !('id' in user) || !user.id || !('username' in user) || !user.username) {
      throw { status: 400, message: 'Invalid access token' };
    }
    return { user: user as User };
  }
};
