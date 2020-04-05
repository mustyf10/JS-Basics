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

function sum(a, b) {
  const c = 3;
  function mult(a, b) {
    return a * b * c;
  }
  console.log(mult(a, b)); //150
  return a + b;
}

const result = sum(10, 5);
console.log(result); //15
