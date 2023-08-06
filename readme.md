# Typescript course by Platzi

## Commands used:

### Transpilation of code
npx tsc src/hello.ts //Transpilating TS code to JS
node src/hello.js // Run the JS code

### Node & browser just run JS
npx tsc src/hello.ts --outDir dist
npx tsc src/cart.ts --outDir dist

### By default target is ES3
npx tsc src/cart.ts --outDir dist --target es6

### 1. To create the tsconfig file (you can choose the enable options uncomment the option in the created file)
npx tsc --init

### 2. To compil the ts file and keep it running 
npx tsc --watch


#### Doc
We will use an anonimous arrow function auto-executed in order to keep our code in the scope and avoid the typescript error "Cannot redeclare block-scoped variable."
```
(()=> {
  //Code
})();
```
