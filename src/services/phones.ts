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
  const data = fs.readFileSync(
    path.resolve(__dirname, 'data', 'phones', `${phoneId}.json`),
    'utf8',
  );

  const selectedPhone = JSON.parse(data);
  const similarPhones = getAllPhones().filter((phone: Phone) => {
    const phoneModel = phone.name.split(' ')[2];
    const prefferedPhoneModel = selectedPhone.name.split(' ')[2];

    return phoneModel.includes(prefferedPhoneModel);
  });

  return {
    selectedPhone,
    similarPhones,
  };
}

export async function getSortedPhonesByPagination(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sortBy: any,
  page: number,
  limit: number,
) {
  const sortedPhones: Phone[] = getAllPhones();

  sortedPhones.sort((phoneA, phoneB) => {
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
    content: sortedPhones.slice(startIndex, endIndex),
    totalPhones: sortedPhones.length,
  };
}
