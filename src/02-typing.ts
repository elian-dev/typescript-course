(() => {
  let myProductName = "Product 1";
  let myProductPrice = 123;

  myProductName //Type string for inferencia
  myProductPrice //Type number for inferencia

  //As string type we can access to string props easily
  myProductName.toLocaleLowerCase();

  let myProductName2 : string = "name"; //Type string explicito

  // Const on hover we dont see the type, becouse as constant variable we can modified the value
  const myProductName3 = "name";
  myProductName3

})();
