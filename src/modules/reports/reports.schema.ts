import { z } from 'zod';

export const getReportsSummarySchema = z.object({
    body: z.object({
        accessToken: z.string().min(1),
    })
});

export const getReportsByUserSchema = z.object({
    body: z.object({
        accessToken: z.string().min(1),
    }),
    params: z.object({
        id: z.string().regex(/^\d+$/).min(1).max(32).optional(),
    })
});
