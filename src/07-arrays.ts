(() => {
  // Type number arrays implicit
  const prices = [1,2,3,4];
  // As our declared array type is number we can't push valuse with diferent types
  //prices.push('ASD');

  prices.push(5);

  // Diferent types are accepted in this array (string or number)
  let data = [5, 'data']; //In this case we are stating to just accept those 2 types
  //But is posible to say that array will accept others types eg.:
  let mixedData: (number | string | boolean)[] = ['hello', 'world'];
  mixedData.push(123);
  mixedData.push(true);

})();
