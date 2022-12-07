import fs from 'fs';
import path from 'path';

import { Phone } from 'src/types/Phone';

export function getAllPhones() {
  const data = fs.readFileSync(
    path.resolve(__dirname, 'data', 'phones.json'),
    'utf8',
  );

  return JSON.parse(data);
}

export function getPhoneById(phoneId: string) {
  const phones = getAllPhones();
  const data = fs.readFileSync(
    path.resolve(__dirname, 'data', 'phones', `${phoneId}.json`),
    'utf8',
  );

  const selectedPhone = JSON.parse(data);
  const similarPhones = phones.filter((phone: Phone) => {
    return selectedPhone.namespaceId === phone.model;
  });

  return {
    selectedPhone,
    similarPhones,
  };
}

export function getPhonesByQuery(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sortBy: any,
  page: number,
  limit: number,
) {
  const phones: Phone[] = [...getAllPhones()];

  phones.sort((phoneA, phoneB) => {
    switch (sortBy) {
      case 'Newest':
        return phoneB.year - phoneA.year;

      case 'Alphabetically':
        return phoneA.name.localeCompare(phoneB.name);

      case 'Cheapest':
        return phoneA.price - phoneB.price;

      default:
        return 0;
    }
  });

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return {
    content: phones.slice(startIndex, endIndex),
    totalPhones: phones.length,
  };
}

export function getPhonesByDiscount() {
  const phones: Phone[] = [...getAllPhones()];

  return phones
    .sort((phoneA, phoneB) => {
      const prevDiscount = (phoneA.fullPrice - phoneA.price);
      const currDiscount = (phoneB.fullPrice - phoneB.price);

      return currDiscount - prevDiscount;
    })
    .slice(0, 15);
}

export function getNewPhones() {
  const phones: Phone[] = [...getAllPhones()];

  return phones
    .sort((phoneA, phoneB) => phoneB.year - phoneA.year)
    .slice(0, 15);
}
