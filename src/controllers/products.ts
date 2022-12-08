import { Request, Response } from 'express';

import * as productsService from '../services/products';

export const getProductsByQuery = (req: Request, res: Response) => {
  const { category, sort, page, limit } = req.query;

  // if (!sort && !page && !limit) {
  //   const allProducts = productsService.getAllProducts();

  //   const phones = allProducts.filter(
  //     (product: Product) => product.category === 'phones',
  //   );
  //   const tablets = allProducts.filter(
  //     (product: Product) => product.category === 'tablets',
  //   );

  //   res.send({
  //     phones,
  //     tablets,
  //   });
  // }

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

export const getProductsLengths = (req: Request, res: Response) => {
  const lengths = productsService.getProductsLengths();

  res.send(lengths);
};

export const getRecommendedProducts = (req: Request, res: Response) => {
  const { productId } = req.params;
  const recommendedProducts = productsService.getRecommendedProducts(productId);

  res.send(recommendedProducts);
};
