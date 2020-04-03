// /**
//  * Section 1
//  *
//  * Arithmetic operators
//  */
// let a, b;
// a = 1;
// b = 2;

// console.log(a + b); //3
// console.log(a * b); //2
// console.log(a / b); //0.5
// console.log(a - b); //-1

// a = "abc";
// b = 5;

// console.log(a + b); //abc5
// console.log(a * b); //nan
// console.log(a / b); //nan
// console.log(a - b); //nan

// // String concatanation
// a = "hello";
// b = "world";

// console.log(a + " " + b); //hello world

// // Unary plus
// c = "1";
// console.log(+c); //1
// c = undefined;
// console.log(+c); //nan

// // Unary minus
// c = "5";
// console.log(-c); //-5
// c = "abc";
// console.log(-c); //nan

// // unary ++
// let d = 5;
// ++d;
// console.log(d);
// d++;
// console.log(d);

// console.log(++d);
// console.log(d++);
// console.log(d);

// // unary --
// console.log(d--);
// console.log(d);
// console.log(--d);
// console.log(d);

/**
 * Section 2
 *
 * Comparison operators
 */

let a, b, c;
a = 5;
b = 7;
c = 5;

console.log(a < b);
console.log(a > b);

console.log(a <= c);
console.log(a >= c);

console.log("_____");

// string comparison
let myStr1, myStr2;

myStr1 = "abc";
myStr2 = "bcd";
myStr3 = "Bcd";

console.log(myStr1 > myStr2);
console.log(myStr1 < myStr2);
console.log(myStr1 > myStr3);

console.log("_____");

// equality operators
let myString = "0";
let myNumber = 0;
let myBoolean = false;

console.log(myString == myNumber);
console.log(myNumber == myBoolean);
console.log(myBoolean == myString);

// strict equality operator - type and value are compared
console.log(myString === myNumber);
console.log(myNumber === myBoolean);
console.log(myBoolean === myString);

console.log(myString != myNumber);
console.log(myString !== myNumber);

console.log("_____");

console.log(null === undefined);
console.log(null == undefined); //both become the number 0
console.log((((0 === "") === null) === undefined) === false);
