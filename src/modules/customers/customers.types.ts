import { Request, Response } from 'express';
import { Recommendation } from '@prisma/client';

export type Customer = {
  name: string | null;
  ID: number;
  address_city: string | null;
  address_zip: string | null;
  address_combined: string | null;
};
export type CustomersRequest = Request<{ id?: number; nameSlug?: string }>;
export type CustomersResponse = Response<{
  customers?: Customer[];
  customer?: Customer | null;
  message?: string;
  recommendations?: Recommendation[];
}>;
