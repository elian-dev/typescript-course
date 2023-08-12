(() => {
  // Alias
  type ProductID = string | number; // We are creating an alias as type
  let productId: ProductID; // Using the alias we can say that this var is type UserID

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL' // We are able to use just the declarate options here, it mean we are putting a limit
  let shirtSize: Sizes;


  function getProduct(productId: ProductID, shirtSize: Sizes) { // And we can use it any where
    if(typeof productId === 'number') {
      console.log(`Product ID: ${productId.toString()} && Size: ${shirtSize.toString()}`)
    }
  }

  getProduct(5092, "L")

})();
