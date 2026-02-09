import { z } from 'zod';

export const listProductsSchema = z.object({
  body: z.object({
    accessToken: z.string().min(1),
  }),
  query: z.object({
    page: z.string().regex(/^\d+$/).min(1).optional(),
    limit: z.string().regex(/^\d+$/).min(1).optional(),
  }),
});

export const getProductsSchema = z.object({
  body: z.object({
    accessToken: z.string().min(1),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/).min(1).max(32),
  }),
});

export const findProductSchema = z.object({
  body: z.object({
    accessToken: z.string().min(1),
  }),
  params: z.object({
    nameSlug: z.string().min(3).max(255),
  }),
});

export const getProductRecommendationsSchema = z.object({
  body: z.object({
    accessToken: z.string().min(1),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/).min(1).max(32),
  }),
});
