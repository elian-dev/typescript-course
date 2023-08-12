(() => {
  let userId: string | number; // Now you are able to assing a string or a number to this var, any other type is wrong
  userId = 123;
  userId = 'asd';

  console.log(userId)

  function greeting(param: string | number ) { // In this function you can receive an argument rather string or number
    if(typeof param === 'string') {
      param.toLocaleLowerCase() // Thanks to typeof of JS, wen can use the correct properties for strings in this scope
    } else {
      param.toFixed() // Thanks to typeof of JS, wen can use the correct properties for numbers in this scope
    }
  }

  greeting('Hola!');
  greeting(1.4);

})
