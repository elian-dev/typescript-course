import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Product 1',
  createdAt: new Date(),
  stock: 124,
});

addProduct({
  title: 'Product 2',
  createdAt: new Date(),
  stock: 430,
  size: 'XL'
});

addProduct({
  title: 'Product 2',
  createdAt: new Date(),
  stock: 200,
  size: 'S'
});

console.log(calcStock())
console.log(products)
