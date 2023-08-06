(() => {
  //Type boolean implicit
  let isEnable = true;

  // isEnable = "asd"; //Its no posible assign another value after the type (Boolean) assignation
  isEnable = false;
  console.log("is enable", isEnable)

  //Type boolean being explicit
  let isNew: boolean;

  const random = Math.random(); //Getting a random value
  isNew = random >= 0.5 ? true : false; //Assign a boolean type depend to a condition
  console.log('random is', random.toFixed(), " and is", isNew) //Printing the result
})();
