// /**
//  * Expressions
//  */
// 10;
// ("abc");
// 5 + 3;
// (function (a) {
//   console.log(a);
// });

// // immediately invoiked function expression
// (function () {
//   console.log("HELLO");
// })();

// let a;
// a = 10;

// 4 <= 10 <= 20 || 5;

// /**
//  * Statements
//  *
//  */
// let a;
// a = 3;

// function myFunction(b) {
//   return b;
// }

// myFunction(a);

// if (true) {
//   console.log("Hello from if statement");
// }

// /**
//  * Expression Statements
//  */
// console.log(4 + 3);

// let a;
// a = 5;

// true;

// console.log(true);

/**
 * Challenge 1
 *
 * expression or statement?
 */
const myObject = {
  x: 10,
  y: true,
};

console.log(delete myObject.x);

delete myObject.x; // expression

/**
 * Challenge 2
 */
function fn() {
  console.log("Greetings from fn function");

  return function (a) {
    console.log(a);
  };
}

fn()(true); //argument true is passed through function, console logs true
