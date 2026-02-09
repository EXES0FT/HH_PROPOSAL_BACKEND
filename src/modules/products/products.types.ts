import { Request, Response } from 'express';
import { Item, Recommendation } from '@prisma/client';

export type Product = Item;
export type ProductsRequest = Request<{ id?: number; nameSlug?: string }>;
export type ProductsResponse = Response<{
  products?: Product[];
  product?: Product | null;
  message?: string;
  recommendations?: Recommendation[];
}>;
