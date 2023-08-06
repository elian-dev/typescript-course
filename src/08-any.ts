(() => {
  //With any we can say that our var can accept any value
  let myDinamicVar: any;
  myDinamicVar = 'asd';
  myDinamicVar = 123;
  myDinamicVar = null;
  myDinamicVar = {name: 'Lorem', price: 123}
  myDinamicVar = [1,2,3,4,5];

  console.log(myDinamicVar);

  //Casting is the process of overriding a type
  //Casting using "as"
  const rta = (myDinamicVar as string);
  rta.toLocaleLowerCase(); //Now we can have the help about properties and detecting errors of TS

  //Casting using "<>"
  myDinamicVar = 123;
  const rta2 = (<number>myDinamicVar);
  rta2.toFixed(); //Now we can have the help about properties and detecting errors of TS

})();
