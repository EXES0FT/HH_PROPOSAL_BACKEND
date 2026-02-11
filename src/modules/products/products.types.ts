import { Request, Response } from 'express';
import { Recommendation } from '@prisma/client';

export type Product = {
  arukod: number;
  megnev: string | null;
  cikkszam: string;
};
export type ProductsRequest = Request<{ id?: number; nameSlug?: string }>;
export type ProductsResponse = Response<{
  products?: Product[];
  product?: Product | null;
  message?: string;
  recommendations?: Recommendation[];
}>;
