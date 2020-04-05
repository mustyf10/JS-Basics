/**
 *
 * SCOPES
 *
 * Example 1
 *
 * Global Scope
 *
 */
var a = 10;
let b = true; // let variables are not added to the global object proeprties

console.log(a);
console.log(window.b);

const c = "abc"; //const also not attached to global object properties but still a global scope variable

function myFunction(a){
    console.log(a);
}