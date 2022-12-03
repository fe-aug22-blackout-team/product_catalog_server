import { phoneData } from '../data/phones';

import { Phone } from 'src/types/Phone';

export async function getSortedPhonesByPagination(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sortBy: any,
  page: number,
  limit: number,
) {
  const sortedPhones: Phone[] = [...phoneData].sort((phoneA, phoneB) => {
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
