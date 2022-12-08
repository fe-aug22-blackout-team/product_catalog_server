import { Request, Response } from 'express';

import * as productsService from '../services/products';

export const getProductsByQuery = (req: Request, res: Response) => {
  const { category, sort, page, limit } = req.query;

  if (!sort || !page || !limit) {
    res.sendStatus(404);

    return;
  }

  const products = productsService.getProductsByQuery(
    category,
    sort,
    +page,
    +limit,
  );

  res.send(products);
};

export const getProductById = (req: Request, res: Response) => {
  const { productId } = req.params;
  const product = productsService.getProductById(productId);

  res.send(product);
};

export const getProductsByDiscount = (req: Request, res: Response) => {
  const products = productsService.getProductsByDiscount();

  res.send(products);
};

export const getNewProducts = (req: Request, res: Response) => {
  const products = productsService.getNewProducts();

  res.send(products);
};

export const getProductByParameters = (req: Request, res: Response) => {
  const { model, capacity, color } = req.query;

  if (!model || !capacity || !color) {
    res.sendStatus(404);

    return;
  }

  const product = productsService.getProductByParameters(
    model,
    capacity,
    color,
  );

  res.send(product);
};

export const getProductsQuantity = (req: Request, res: Response) => {
  const productsQuantity = productsService.getProductsQuantity();

  res.send(productsQuantity);
};

export const getRecommendedProducts = (req: Request, res: Response) => {
  const { productId } = req.params;
  const recommendedProducts = productsService.getRecommendedProducts(productId);

  res.send(recommendedProducts);
};
