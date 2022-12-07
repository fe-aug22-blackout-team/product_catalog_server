import express from 'express';

import * as phonesController from '../controllers/phones';

export const phonesRouter = express.Router();

phonesRouter.get('/discount', phonesController.getPhonesByDiscount);
phonesRouter.get('/', phonesController.getPhonesByQuery);
phonesRouter.get('/:phoneId', phonesController.getPhoneById);
