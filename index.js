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

/**
 * Example 4
 * 
 * Reuse parameter names
 */

 function myFunction1(a ,b) {
     console.log(a, b);
 }

 function myFunction2(a, b) {
     console.log(a, b);
 }

 const a = true;
 const b = null;

 myFunction1(2, 3);

 myFunction2(5, 7);

 console.log(a, b);