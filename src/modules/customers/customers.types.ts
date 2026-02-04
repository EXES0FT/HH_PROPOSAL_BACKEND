import { Request, Response } from 'express';
import { Client, Recommendation } from '@prisma/client';

export type Customer = Client;
export type CustomerRequest = Request<{ id?: number, nameSlug?: string }>;
export type CustomersResponse = Response<{
    customers?: Customer[];
    customer?: Customer | null;
    message?: string;
    recommendations?: Recommendation[];
}>;
