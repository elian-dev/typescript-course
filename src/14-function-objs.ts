(() => {
  // Now our function can received an object witht the asigned types
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  login({
      email: 'elian@dev.com',
      password: 1234
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes, // Optional key
  }) => {
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
  // Output: An array of objects, notice if we dont pass the optional value any will happen in that case just igonore and my object dont include that key
  /*
    [
      {
        title: 'Product 1',
        createdAt: 2023-08-12T08:39:04.380Z,
        stock: 124
      },
      {
        title: 'Product 2',
        createdAt: 2023-08-12T08:39:04.380Z,
        stock: 154,
        size: 'S'
      }
    ]
  */

})()

