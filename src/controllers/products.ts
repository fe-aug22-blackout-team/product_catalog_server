import { Request, Response } from 'express';

import * as productsService from '../services/products';

export const getAllProducts = (req: Request, res: Response) => {
  const products = productsService.getAllProducts();

  res.send(products);
};
