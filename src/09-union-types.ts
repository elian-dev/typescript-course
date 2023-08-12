(() => {
  let userId: string | number; // Now you are able to assing a string or a number to this var, any other type is wrong
  userId = 123;
  userId = '12345';

  console.log(userId)

  function greeting(param: string | number ) { // In this function you can receive an argument rather string or number
    if(typeof param === 'string') {
      // Thanks to typeof of JS, wen can use the correct properties for strings in this scope
      console.log(`String: ${param.toLocaleLowerCase()}`)
    } else {
      // Thanks to typeof of JS, wen can use the correct properties for numbers in this scope
      console.log(`Number: ${param.toFixed(1)}`)
    }
  }

  greeting('Hola!');
  greeting(12.4444);

})();
