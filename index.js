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

/**
 * Example 2
 * 
 * Parameters of a function
 */

 function myFunction(a,b) {
     console.log(a);
     console.log(b);
 }

 myFunction(10, 5);

 myFunction(true, null);

 console.log(myFunction(4, 3)); //undefined - nothing returned