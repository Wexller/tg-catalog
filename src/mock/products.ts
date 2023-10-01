import img from 'src/assets/images/Ad001093-1.jpg';

export interface Product {
  sku: string;
  name: string;
  price: number;
  img: string;
}

export const products: Product[] = [
  { sku: 'Ad001093-1', name: 'Adidas Drop Step 1', price: 6800, img },
  { sku: 'Ad001093-2', name: 'Adidas Drop Step 2', price: 6800, img },
  { sku: 'Ad001093-3', name: 'Adidas Drop Step 3', price: 6800, img },
  { sku: 'Ad001093-4', name: 'Adidas Drop Step 4', price: 6800, img },
  { sku: 'Ad001093-5', name: 'Adidas Drop Step 5', price: 6800, img },
  { sku: 'Ad001093-6', name: 'Adidas Drop Step 6', price: 6800, img },
  { sku: 'Ad001093-7', name: 'Adidas Drop Step 7', price: 6800, img },
  { sku: 'Ad001093-8', name: 'Adidas Drop Step 8', price: 6800, img },
  { sku: 'Ad001093-9', name: 'Adidas Drop Step 9', price: 6800, img },
  { sku: 'Ad001093-10', name: 'Adidas Drop Step 10', price: 6800, img },
];
