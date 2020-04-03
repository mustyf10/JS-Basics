/**
 * Section 1
 *
 * Arithmetic operators
 */
let a, b;
a = 1;
b = 2;

console.log(a + b); //3
console.log(a * b); //2
console.log(a / b); //0.5
console.log(a - b); //-1

a = "abc";
b = 5;

console.log(a + b); //abc5
console.log(a * b); //nan
console.log(a / b); //nan
console.log(a - b); //nan

// String concatanation
a = "hello";
b = "world";

console.log(a + " " + b); //hello world

// Unary plus
c = "1";
console.log(+c); //1
c = undefined;
console.log(+c); //nan

// Unary minus
c = "5";
console.log(-c); //-5
c = "abc";
console.log(-c); //nan

// unary ++
let d = 5;
++d;
console.log(d);
d++;
console.log(d);

console.log(++d);
console.log(d++);
console.log(d);

// unary --
console.log(d--);
console.log(d);
console.log(--d);
console.log(d);
