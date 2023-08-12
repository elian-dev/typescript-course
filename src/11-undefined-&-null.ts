(() => {
  let myVar = null; // In this case we a null as value but the type of our var will be any
  let myVarNull: null = null; // If we want that our var is null and not any value we have to be explicit

  let myNumber: number | null = null; // In some cases we need allows to initialize our var in null and then assign othe value types
  myNumber = 123;


  type Name = string | null;

  function hi(name: Name) {
    let hello = 'Hola ';
    hello += name?.toUpperCase() || 'nobody' // Optional strings: validate if its null

    console.log(hello);
  }

  hi('Elian');
  hi(null);

})()
