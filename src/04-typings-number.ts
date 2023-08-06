(() => {
  let productPrice: number = 100;
  productPrice = productPrice - 1;

  let productPrice2: number = 200;
  console.log(productPrice2);

  let discount = parseInt('20');
  console.log(discount);


  if(productPrice <= 150) {
    console.log('Apply', productPrice)
    console.log(productPrice / discount)
  } else {
    console.log('Not apply', productPrice)
  }

  if(productPrice2 <= 150) {
    console.log('Apply', productPrice2)
    console.log(productPrice2 / discount)
  } else {
    console.log('Not apply', productPrice2)
  }


  //Hexadecimal type "0x"
  let hex = 0xfff;
  //Binary types "0b"
  let bin = 0b10101;

})();
