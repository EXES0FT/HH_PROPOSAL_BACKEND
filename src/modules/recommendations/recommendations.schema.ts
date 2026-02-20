import { z } from 'zod';

export const listRecommendationsSchema = z.object({
  body: z.object({
    accessToken: z.string().min(1),
  }),
  query: z.object({
    page: z.string().regex(/^\d+$/).min(1).optional(),
    limit: z.string().regex(/^\d+$/).min(1).optional(),
  }),
});

export const getRecommendationsSchema = z.object({
  body: z.object({
    accessToken: z.string().min(1),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/).min(1).max(32),
  }),
});

export const createSchema = z
  .object({
    arukod: z.number().positive().min(1),
    recommendation_price: z.string().min(1),
  })
  .strict();

export const createRecommendationSchema = z.object({
  body: z.object({
    accessToken: z.string().min(1),
    client_id: z.number().int().positive().min(1),
    recommended_by: z.number().int().positive().min(1),
    recommendations: z.array(createSchema).min(1),
  }),
});
