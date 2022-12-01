import { Request, Response } from 'express';

import * as phonesService from '../services/phones';

export const getAllPhones = (req: Request, res: Response) => {
  const phones = phonesService.getAllPhones();

  res.send(phones);
};

export const getSlicedPhones = (req: Request, res: Response) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 16;

  const phones = phonesService.getSlicedPhones(+page, +limit);

  res.send(phones);
};
