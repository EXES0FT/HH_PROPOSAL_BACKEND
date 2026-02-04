//TODO: implement proper hashing
export const hashPassword = (password: string) => password;

export const comparePassword = (password: string, hash: string) =>
  hashPassword(password) === hash;