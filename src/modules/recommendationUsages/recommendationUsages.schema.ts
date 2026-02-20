import { z } from 'zod';

export const listRecommendationUsagesSchema = z.object({
  body: z.object({
    accessToken: z.string().min(1),
  }),
  query: z.object({
    page: z.string().regex(/^\d+$/).min(1).optional(),
    limit: z.string().regex(/^\d+$/).min(1).optional(),
  }),
});

export const getRecommendationUsagesSchema = z.object({
  body: z.object({
    accessToken: z.string().min(1),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/).min(1).max(32),
  }),
});

export const createSchema = z
  .object({
    recommendation_id: z.number().positive().min(1),
    order_item_id: z.string().min(1).optional().nullable(),
    is_influenced: z.boolean().optional(),
  })
  .strict();

export const createRecommendationUsageSchema = z.object({
  body: z.object({
    accessToken: z.string().min(1),
    confirmed_by: z.number().int().positive().min(1),
    recommendation_usages: z.array(createSchema).min(1),
  }),
});
