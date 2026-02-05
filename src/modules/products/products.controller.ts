import { productsService } from './products.service';
import { ProductsRequest, ProductsResponse } from './products.types';

export const getAll = async (req: ProductsRequest, res: ProductsResponse) => {
  const page = req.query.page ? Number(req.query.page) : 1;
  const limit = req.query.limit ? Number(req.query.limit) : 10;
  const result = await productsService.getAll(page, limit);
  return res.json(result);
};

export const getById = async (req: ProductsRequest, res: ProductsResponse) => {
  const productId = req.params.id;
  const result = await productsService.getById(Number(productId));
  return res.json(result);
};

export const getByIdWithRecommendations = async (req: ProductsRequest, res: ProductsResponse) => {
  const productId = req.params.id;
  if (!productId) {
    return res.status(400).json({ message: 'Invalid productId!' });
  }
  const result = await productsService.getByIdWithRecommendations(Number(productId));
  return res.json(result);
};
