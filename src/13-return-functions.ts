(() => {
  // We have an arrow function here to calc the sum of all prices in the array, returning a value
  const calcTotal = (prices: number[]): number => {
    const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total;
  }

  // In this case we have another arrow function but in this case doesn't return any value
  const printTotal = (prices: number[]): void => { // We can say that our function won't return anything with the void type
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  // You can also assign varius types to function
  function devolverMayor(a: number, b: number): number | string {
    if(a > b){
        // Return a number
        return a.toFixed();
    } else if( b > a ) {
        // Return a number
        return b.toString();
    } else {
        // Return an string
        return `Los números ${a} y ${b} son iguales`;
    }
}

  const prices = [10, 20, 30, 40];
  const totalPrice = calcTotal(prices);
  console.log(totalPrice); // Output: 100

  printTotal([10, 20, 30, 40, 50])

})()
