import { Request, Response } from 'express';

import * as phonesService from '../services/phones';

export const getSlicedPhones = async(req: Request, res: Response) => {
  const sort = req.query.sort || 'Newest';
  const page = req.query.page || 1;
  const limit = req.query.limit || 16;

  const phones = await phonesService.getSortedPhonesByPagination(
    sort,
    +page,
    +limit,
  );

  res.status(200);
  res.send(phones);
};
