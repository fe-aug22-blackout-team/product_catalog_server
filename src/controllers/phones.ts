import { Request, Response } from 'express';

import * as phonesService from '../services/phones';

export const getPhonesByQuery = async(req: Request, res: Response) => {
  const { sort, page, limit } = req.query;

  if (!sort || !page || !limit) {
    res.sendStatus(404);

    return;
  }

  const phones = phonesService.getSortedPhonesByPagination(
    sort,
    +page,
    +limit,
  );

  res.status(200);
  res.send(phones);
};

export const getPhoneById = async(req: Request, res: Response) => {
  const { phoneId } = req.params;
  const phone = phonesService.getPhoneById(phoneId);

  res.send(phone);
};

export const getPhonesByDiscount = async(req: Request, res: Response) => {
  const phones = phonesService.getPhonesByDiscount();

  res.send(phones);
};
