import { phoneData } from '../data/phones';

import { Phone } from 'src/types/Phone';

export async function getSlicedPhones(page: number, limit: number) {
  const phones: Phone[] = phoneData;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return {
    content: phones.slice(startIndex, endIndex),
    totalPhones: phones.length,
  };
}
