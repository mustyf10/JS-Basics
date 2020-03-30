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

let myPost = {};;

myPost.postTitle = "object is reference type";

myPost.postLikes = 0;

myPost.shared = false;

console.log(myPost);

myPost.postLikes =+1;

console.log(myPost);

delete myPost.shared;

console.log(myPost);