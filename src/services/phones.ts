import { phonesData } from '../data/phones';

import { Phone } from 'src/types/Phone';

export async function getSlicedPhones(
  sortBy: string,
  page: number,
  limit: number,
) {
  const phones: Phone[] = phonesData.sort((phoneA, phoneB) => {
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
