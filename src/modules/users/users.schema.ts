import { z } from 'zod';

export const listUsersSchema = z.object({
  body: z.object({
    accessToken: z.string().min(1),
  }),
  query: z.object({
    page: z.string().regex(/^\d+$/).min(1).optional(),
    limit: z.string().regex(/^\d+$/).min(1).optional()
  })
});

export const getUsersSchema = z.object({
    body: z.object({
        accessToken: z.string().min(1),
    }),
    params: z.object({
        id: z.string().regex(/^\d+$/).min(1).max(32),
    })
});
