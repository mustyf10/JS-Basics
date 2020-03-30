// let myObject;

// myObject = {
//     a: 10,
//     b: "abc"
// }

// console.log(myObject);

// myObject.a = 15;

// console.log(myObject);

// myObject.c = true;

// console.log(myObject);

// delete myObject.b;

// console.log(myObject);

// console.log(myObject.a);

//Challenge 1

// let myPost = {};;

// myPost.postTitle = "object is reference type";

// myPost.postLikes = 0;

// myPost.shared = false;

// console.log(myPost);

// myPost.postLikes =+1;

// console.log(myPost);

// delete myPost.shared;

// console.log(myPost);

//Challenge 2

// var myObject = {
//     a: 10
// }

// var copyOfMyObject = myObject

// copyOfMyObject.b = false;

// console.log(myObject);
// console.log(copyOfMyObject);

// let myObject = {
//     a: true,
//     b: null,
//     c: 25
// };

// console.log(myObject["a"]); //true

// console.log(myObject["b"]); //null

// const propertyName = "c";

// console.log(myObject[propertyName]); //25

// myObject["new" + "Property" + "Name"] = "Value for dynamically computed property name";

// console.log(myObject);

//Example 4

// const myObject = {
//     a: 3,
//     b: true
// };

// console.log(myObject.c) //undefined

// myObject.newPropertyWithUndefinedValue = undefined; //IMPORTANT: never assign undefined as a property or variable, use NULL instead

// console.log(myObject);
// console.log(myObject.newPropertyWithUndefinedValue);

//Challenge 3

let objectWithNestedObject = {};

objectWithNestedObject.nestedObject = {};

objectWithNestedObject.nestedObject.a = null;

const newPropertyName = "b";

objectWithNestedObject.nestedObject[newPropertyName] = true;

console.log(objectWithNestedObject);