// /**
//  * Example 1
//  *
//  * Simplest function in JS
//  */

// function myFunction() {}

// console.log(myFunction);

// myFunction();

// console.log(myFunction()); //undefined

// console.log(myFunction(10, true)); //undefined

// /**
//  * Example 2
//  *
//  * Parameters of a function
//  */

//  function myFunction(a,b) {
//      console.log(a);
//      console.log(b);
//  }

//  myFunction(10, 5);

//  myFunction(true, null);

//  console.log(myFunction(4, 3)); //undefined - nothing returned

// /**
//  * Example 3
//  *
//  * Function scope
//  */

//  function myFunction(a,b ){
//      console.log(a, b);
//  }

//  console.log(myFunction(3, 2));

//  console.log(a);

// /**
//  * Example 4
//  *
//  * Reuse parameter names
//  */

//  function myFunction1(a ,b) {
//      console.log(a, b);
//  }

//  function myFunction2(a, b) {
//      console.log(a, b);
//  }

//  const a = true;
//  const b = null;

//  myFunction1(2, 3);

//  myFunction2(5, 7);

//  console.log(a, b);

// /**
//  * Example 5
//  *
//  * Add return
//  */

//  function sum(a, b){
//      return a + b;
//  }

//  sum(10, 5);

// /**
//  * Example 6
//  *
//  * What happens after return?
//  */

//  function myFunction(a){
//     console.log(a);
//     return a; //function stops here
//     console.log(a);
// }

// myFunction(10);

// /**
//  * CHALLENGE 1
//  *
//  * Create function with 3 parameters
//  * Create new variable and assign result
//  * Print to the console the result
//  * No return
//  */

//  function multiplication(a, b, c){
//     var result = a * b * c;
//     console.log(result);
//  }

//  multiplication(2, 2, 2);

// /**
//  * CHALLENGE 2
//  *
//  * Create function called 'concatenateStrings' and will have 2 parameters
//  * this function will retrun concatenated strings
//  */

// function concatenateStrings(a, b){
//     return a + " " + b;
// }

// const c = concatenateStrings("Hello", "World");

// console.log(c);

// /**
//  * CHALLENGE 3
//  *
//  * Create function called outerFunction with 2 paramenters
//  * Create function called innerFunction with 1 parameter
//  * innerFunction will return square of parameter
//  * outerFunction will return sum of parameters
//  * call innerFunction with argument sum of both parameters from outerFunction
//  * log to the console result innerFunction
//  */

// function outerFunction(a, b) {
//   function innerFunction(c) {
//     return c * c;
//   }
//   const c = a + b;
//   console.log(innerFunction(c));
// }

// outerFunction(2, 3);

// outerFunction(5, 5);

// outerFunction(7, 3);

/**
 * ANONYMOUS FUNCTION EXPRESSIONS
 */

/**
 * Example 1
 *
 */

const myFunction = function() {}; //myFunction holds function as a value
console.log(myFunction); //can call the value
