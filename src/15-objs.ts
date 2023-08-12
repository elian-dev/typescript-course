(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes, // Optional key
  }

  const products: Product[] = []; // We can assign the product type to our array
  // products.push('sas') // We can't push any other value to the products array

  // products.push({ name: 'something' }) //Also its not posible to pass an object that doesnt math with the types of Produc type


  const addProduct = (data: Product) => {
    products.push(data)
  }

  // Function call without size
  addProduct({
    title: 'Product 1',
    createdAt: new Date(),
    stock: 124,
  });

  // Function call with size
  addProduct({
    title: 'Product 2',
    createdAt: new Date(),
    stock: 154,
    size: 'S'
  });

  console.log(products);

})()

