import { customersService } from './customers.service';
import { CustomerRequest, CustomersResponse } from './customers.types';

export const getAll = async (req: CustomerRequest, res: CustomersResponse) => {
  const result = await customersService.getAll();
  return res.json(result);
};

export const getById = async (req: CustomerRequest, res: CustomersResponse) => {
  const customerId = req.params.id;
  if (!customerId) {
    return res.status(400).json({ message: 'Invalide customerId!' });
  }
  const result = await customersService.getById(Number(customerId));
  return res.json(result);
};

export const getByNameSlug = async (req: CustomerRequest, res: CustomersResponse) => {
  const nameSlug = req.params.nameSlug;
  if (!nameSlug) {
    return res.status(400).json({ message: 'Invalid nameSlug!' });
  }
  if (nameSlug.length < 3) {
    return res.json({ customers: [] });
  }
  const result = await customersService.getByNameSlug(nameSlug);
  return res.json(result);
};

export const getByIdWithRecommendations = async (req: CustomerRequest, res: CustomersResponse) => {
  const customerId = req.params.id;
  if (!customerId) {
    return res.status(400).json({ message: 'Invalide customerId!' });
  }
  const result = await customersService.getByIdWithRecommendations(Number(customerId));
  return res.json(result);
};
