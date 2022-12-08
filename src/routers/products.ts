import express from 'express';

import * as productsController from '../controllers/products';

export const productsRouter = express.Router();

productsRouter.get('/lengths', productsController.getProductsLengths);
productsRouter.get('/discount', productsController.getProductsByDiscount);
productsRouter.get('/new', productsController.getNewProducts);
productsRouter.get('/parameters', productsController.getProductByParameters);
productsRouter.get('/', productsController.getProductsByQuery);
productsRouter.get('/:productId', productsController.getProductById);

productsRouter.get(
  '/:productId/recommended',
  productsController.getRecommendedProducts,
);
