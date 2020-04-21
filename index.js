/**
 * ARRAYS
 *
 * EXAMPLE 1
 * EMPTY ARRAYS
 */
// const myArray = [];
// console.log(myArray);

/**
 * Example 2
 *
 * Add elements to the array
 */
// const myArray = [];

// myArray[0] = "First element";
// console.log(myArray);

// myArray[1] = "Second element";
// console.log(myArray);

// myArray.push("Third element");
// console.log(myArray);

/**
 * Example 3
 *
 * Modify Elements
 */

// const myArray = [3, true, "abc", {}];
// console.log(myArray);

// myArray[1] = "New value";
// console.log(myArray);

// myArray[0] = null;
// console.log(myArray);

// myArray[3].newProp = 10;
// console.log(myArray);
// console.log(myArray[3].newProp);
// console.log(myArray[3]["newProp"]);

// /**
//  * Example 4
//  *
//  * Square bracket notation
//  */
// const myArray = [1, 2];
// console.log(myArray[0]);
// // console.log(myArray.0);  Cannot access array property using dot notation

// /**
//  * Example 5
//  *
//  * Delete elements
//  */
// const myArray = [true, null, 1, 2, "abc"];
// console.log(myArray);

// delete myArray[2]; //length will remain the same but specific element name will be deleted
// console.log(myArray);
// console.log(myArray[2]); //undefined

// myArray.pop(); // deletes last element in array
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

// myArray.shift(); // remove first element in array
// console.log(myArray);

// /**
//  * Example 6
//  *
//  * Compare arrays
//  */
// const myArray1 = [1, 2, 3];
// const myArray2 = [1, 2, 3];
// console.log(myArray1 === myArray2); // false on strict comparison operator

// const copyOfMyArray1 = myArray1;
// console.log(copyOfMyArray1 === myArray1); // true variables hold the same values

// console.log(myArray1.toString() === myArray2.toString()); // true, compares both as strings. Works only if the order is the same

/**
 * CHALLENGE 1
 *
 * Add elements to the array
 * First add string "Hello"
 * Then add number 100
 */
const myArray = [true, null];
myArray.unshift("Hello");
myArray.unshift(100);
console.log(myArray);
