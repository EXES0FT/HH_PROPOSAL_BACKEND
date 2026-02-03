export const hashPassword = (password: string) => password + '123456';

export const comparePassword = (password: string, hash: string) =>
  password + '123456' === hash;