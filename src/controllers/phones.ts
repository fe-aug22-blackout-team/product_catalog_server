import { Request, Response } from 'express';

import * as phonesService from '../services/phones';

export const getPhonesByQuery = (req: Request, res: Response) => {
  const { sort, page, limit } = req.query;

  if (!sort || !page || !limit) {
    res.sendStatus(404);

    return;
  }

  const phones = phonesService.getPhonesByQuery(
    sort,
    +page,
    +limit,
  );

  res.send(phones);
};

export const getPhoneById = (req: Request, res: Response) => {
  const { phoneId } = req.params;
  const phone = phonesService.getPhoneById(phoneId);

  res.send(phone);
};

export const getPhonesByDiscount = (req: Request, res: Response) => {
  const phones = phonesService.getPhonesByDiscount();

  res.send(phones);
};

export const getNewPhones = (req: Request, res: Response) => {
  const phones = phonesService.getNewPhones();

  res.send(phones);
};

export const getPhoneByParameters = (req: Request, res: Response) => {
  const { model, capacity, color } = req.query;

  if (!model || !capacity || !color) {
    res.sendStatus(404);

    return;
  }

  const phone = phonesService.getPhoneByParameters(model, capacity, color);

  res.send(phone);
};
