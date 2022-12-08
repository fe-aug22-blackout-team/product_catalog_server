import fs from 'fs';
import path from 'path';

import { Product } from 'src/types/Product';

export function getAllProducts() {
  const data = fs.readFileSync(
    path.resolve(__dirname, 'data', 'products.json'),
    'utf8',
  );

  return JSON.parse(data);
}

export function getProductById(productId: string) {
  const data = fs.readFileSync(
    path.resolve(__dirname, 'data', 'products', `${productId}.json`),
    'utf8',
  );

  return JSON.parse(data);
}

export function getRecommendedProducts(productId: string) {
  const products = getAllProducts();
  const data = fs.readFileSync(
    path.resolve('src', 'data', 'products', `${productId}.json`),
    'utf8',
  );

  const selectedProduct = JSON.parse(data);
  const similarProducts = products.filter((phone: Product) => {
    return selectedProduct.namespaceId === phone.model;
  });

  return similarProducts;
}

export function getProductsByQuery(
  category: any,
  sortBy: any,
  page: number,
  limit: number,
) {
  const products: Product[] = getAllProducts().filter(
    (product: Product) => product.category === category,
  );

  products.sort((productA, productB) => {
    switch (sortBy) {
      case 'Newest':
        return productB.year - productA.year;

      case 'Alphabetically':
        return productA.name.localeCompare(productB.name);

      case 'Cheapest':
        return productA.price - productB.price;

      default:
        return productB.year - productA.year;
    }
  });

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return products.slice(startIndex, endIndex);
}

export function getProductsByDiscount() {
  const phones: Product[] = [...getAllProducts()];

  return phones
    .sort((phoneA, phoneB) => {
      const phoneADiscount = (phoneA.fullPrice - phoneA.price);
      const phoneBDiscount = (phoneB.fullPrice - phoneB.price);

      return phoneBDiscount - phoneADiscount;
    })
    .slice(0, 15);
}

export function getNewProducts() {
  const products: Product[] = [...getAllProducts()];

  return products
    .sort((productA, productB) => productB.year - productA.year)
    .slice(0, 15);
}

export function getProductByParameters(
  model: any,
  capacity: any,
  color: any,
) {
  const products: Product[] = getAllProducts();

  return products.find(product => (
    product.model === model
    && product.capacity === capacity
    && product.color === color
  ));
}

export function getProductsLengths() {
  const products: Product[] = getAllProducts();

  const phonesLength = products
    .filter(product => product.category === 'phones')
    .length;
  const tabletsLength = products
    .filter(product => product.category === 'tablets')
    .length;
  const accessoriesLength = products
    .filter(product => product.category === 'accessories')
    .length;

  return {
    phonesLength,
    tabletsLength,
    accessoriesLength,
  };
}
