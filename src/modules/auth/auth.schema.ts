import { z } from 'zod';

export const loginSchema = z.object({
  body: z.object({
    username: z.string().min(1).max(255),
    password: z.string().min(1).max(255)
  })
});

export const refreshSchema = z.object({
  body: z.object({
    accessToken: z.string().min(1)
  })
});

export const profileSchema = z.object({
  body: z.object({
    accessToken: z.string().min(1)
  })
});