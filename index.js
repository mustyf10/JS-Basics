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

// /**
//  * Section 2
//  *
//  * Comparison operators
//  */

// let a, b, c;
// a = 5;
// b = 7;
// c = 5;

// console.log(a < b);
// console.log(a > b);

// console.log(a <= c);
// console.log(a >= c);

// console.log("_____");

// // string comparison
// let myStr1, myStr2;

// myStr1 = "abc";
// myStr2 = "bcd";
// myStr3 = "Bcd";

// console.log(myStr1 > myStr2);
// console.log(myStr1 < myStr2);
// console.log(myStr1 > myStr3);

// console.log("_____");

// // equality operators
// let myString = "0";
// let myNumber = 0;
// let myBoolean = false;

// console.log(myString == myNumber);
// console.log(myNumber == myBoolean);
// console.log(myBoolean == myString);

// // strict equality operator - type and value are compared
// console.log(myString === myNumber);
// console.log(myNumber === myBoolean);
// console.log(myBoolean === myString);

// console.log(myString != myNumber);
// console.log(myString !== myNumber);

// console.log("_____");

// console.log(null === undefined);
// console.log(null == undefined); //both become the number 0
// console.log((((0 === "") === null) === undefined) === false);

// /**
//  * Section 3
//  *
//  * Logical Operators
//  */
// console.log(true || false);
// console.log(false || true);

// console.log("abc" || "");
// console.log("" || "abc");
// console.log("" || "");

// console.log("" || 0 || null || undefined || NaN || false); //false

// let city;
// const defaultCity = "New York";

// console.log(city || defaultCity);

// city = "Los Angeles";

// console.log(city || defaultCity); //non-empty strings are always true. first true value is always given (the one on the left)

// console.log("___________");

// console.log(true && false);
// console.log(false && true);
// console.log("abc" && 10 && false && "" && "abcd");
// console.log("abc" && 10 && NaN && "" && "abcd"); //first false operand is returned value

// console.log("abc" && 10 && true && 123 && "string"); // result is string

// console.log("____________");

// console.log(!"abc");
// console.log(!"");
// console.log(!0);

// let myVariable = undefined;

// console.log(!myVariable);

// myVariable = "Mustafa";
// console.log(!myVariable);

// //truthy falsy check
// myVariable = null;
// console.log(!!myVariable);
// myVariable = 10;
// console.log(!!myVariable);

// //or returns first truthy value
// //and returns first falsy value, or stops at first falsy value. Last value of last operand is returned if there is no flasy value
// //not is an unary operator, prefix operator. Returns either false or true
// //use !! to check whether value is truthy or falsy

// /**
//  * Section 4
//  *
//  * Operators precedence
//  */
// console.log(2 + 4 * 10);

// /**
//  * Section 5
//  *
//  * Operators associativity
//  */
// let a, b;
// b = 3;

// a = b = 5;
// console.log(a, b);

// /**
//  * Challenge 1
//  *
//  * Compare 2 variable
//  * log to console true if 1 is less than or equal to 2
//  * conver to numbers before comparison
//  */

// let myVariable1 = 10;
// let myVariable2 = "5";

// console.log(+myVariable1 <= +myVariable2);

// /**
//  * Challenge 2
//  *
//  * Print to console remainder of the divison of myNum1 by myNum2
//  */

// let myNum1 = 10;
// let myNum2 = 3;

// console.log(myNum1 % myNum2);

/**
 * Challenge 3
 */

console.log(3 || (true && null) || false); //3

/**
 * Challenge 4
 *
 * alternative expressions
 */

let a = 10;

//a = a + 1;
a += 1;
console.log(a);

//a = a * 2;
a *= 2;
console.log(a);

//a = a - 5;
a -= 5;
console.log(a);

//a = a / 2;
a /= 2;
console.log(a);
