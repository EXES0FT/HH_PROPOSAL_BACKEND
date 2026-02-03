import { prisma } from '../../prisma/client';
import { comparePassword } from '../../utils/password';
import { signToken } from '../../utils/jwt';

export const authService = {
  async login({ username, password }: { username: string; password: string }) {
    const user = await prisma.users.findFirst({ where: { username } });
    if (!user || !user.password) throw { status: 400, message: 'Invalid credentials' };

    const valid = await comparePassword(password, user.password);
    if (!valid) throw { status: 400, message: 'Invalid credentials' };

    const token = signToken({ id: user.id, role: user.email });

    return {
      accessToken: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    };
  },
  async refresh({ refreshToken }: { refreshToken: string }) {
    //TODO: vár egy refresh tokent és validitástól függően visszaad egy új
    //access tokent, hasznos ha hosszú távú bejelentkezésről beszélünk, mint esetünkben is.
    const token = refreshToken;
    return {
      accessToken: token
    };
  },
  async profile() {
    //TODO: a belépett felhasználó adatait adja vissza, pl profil megjelenítésre
    return {
      user: {
        id: 1,
        name: 'Bakosi Péter',
        email: 'Email'
      }
    };
  }

};
