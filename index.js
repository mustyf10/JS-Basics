// /**
//  *
//  * SCOPES
//  *
//  * Example 1
//  *
//  * Global Scope
//  *
//  */
// var a = 10;
// let b = true; // let variables are not added to the global object proeprties

// console.log(a);
// console.log(window.b);

// const c = "abc"; //const also not attached to global object properties but still a global scope variable

// function myFunction(a){
//     console.log(a);
// }

/**
 * Example 2
 *
 * Function scope
 */
//let e;

// function myFunction(a, b) {
//   const c = true;
//   console.log(c);
//   //console.log(d) undefined value d not in the function or global scope
//   console.log(e);
//   console.log(a, b); //different values depending on what is passed through
// }

// myFunction();

// myFunction(2, 3);

/**
 * Example 3
 *
 * Scope Chain
 */

// function sum(a, b) {
//   const c = 3;
//   function mult(a, b) {
//     return a * b * c;
//   }
//   console.log(mult(a, b)); //150
//   return a + b;
// }

// const result = sum(10, 5);
// console.log(result); //15

// /**
//  * Example 4
//  *
//  * Undeclared variable
//  */
// a = 10;
// console.log(a);

// const myFunction = function () {
//   b = 5;
//   console.log(b);
// };

// /**
//  * Example 5
//  *
//  * Strict mode
//  */
// "use strict";

// // a = 10; // a is not defined

// // function myFn() {
// //   b = 5; // b is not defined
// // }

// // myFn();

// function myFn() {
//     "use strict";
//     b = 5; // b is not defined
//   }

//   myFn();

// /**
//  * Challenge 1
//  *
//  * Function scopes
//  */

// const b = 2;
// let d = 15;

// function myFn1(a) {
//   let b;
//   let d = 10;
//   myFn2();
// }

// function myFn2(a) {
//   let c = 5;
//   console.log(a, b, c, d); // udefined 2 5 15
// }

// myFn1();

// /**
//  * Challenge 2
//  *
//  * Strict Mode
//  * Fix the code below
//  */
// "use strict";

// // function myFunction() {
// //   a = 2;
// //   return a;
// // }

// // myFunction();

// function myFunction() {
//   let a = 2;
//   return a;
// }

// myFunction();

/**
 * Challenge 3
 * 
 * Callback function
 */

setTimeout(function myFn(){
    console.log("Hello from myFN")
}, 2000);

myFn();