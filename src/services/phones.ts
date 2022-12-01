import fs from 'fs/promises';
import path from 'path';

import { Phone } from 'src/types/Phone';

const phonesPath = path.join('src', 'data', 'phones.json');

async function read() {
  const data = await fs.readFile(phonesPath, 'utf8');

  return JSON.parse(data);
}

export async function getSlicedPhones(page: number, limit: number) {
  const phones: Phone[] = await read();

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return phones.slice(startIndex, endIndex);
}
