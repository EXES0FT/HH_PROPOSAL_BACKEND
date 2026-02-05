import { customersService } from './customers.service';
import { CustomersRequest, CustomersResponse } from './customers.types';

export const getAll = async (req: CustomersRequest, res: CustomersResponse) => {
  const page = req.query.page ? Number(req.query.page) : 1;
  const limit = req.query.limit ? Number(req.query.limit) : 10;
  const result = await customersService.getAll(page, limit);
  return res.json(result);
};

export const getById = async (req: CustomersRequest, res: CustomersResponse) => {
  const customerId = req.params.id;
  const result = await customersService.getById(Number(customerId));
  return res.json(result);
};

export const getByNameSlug = async (req: CustomersRequest, res: CustomersResponse) => {
  const nameSlug = req.params.nameSlug!;
  const result = await customersService.getByNameSlug(nameSlug);
  return res.json(result);
};

export const getByIdWithRecommendations = async (req: CustomersRequest, res: CustomersResponse) => {
  const customerId = req.params.id;
  const result = await customersService.getByIdWithRecommendations(Number(customerId));
  return res.json(result);
};
