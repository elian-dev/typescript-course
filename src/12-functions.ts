(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const createProductToJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson('Product 1', new Date(), 12, 'XL');
  const product2 = createProductToJson('Product 2', new Date(), 5);

  console.log(product1);
  console.log(product2);

})();
