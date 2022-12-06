import express from 'express';

import * as phonesController from '../controllers/phones';

export const phonesRouter = express.Router();

phonesRouter.get('/', phonesController.getSlicedPhones);
phonesRouter.get('/:phoneId', phonesController.getPhoneById);
