
//Hoisting

//Var Hoisting

console.log(x); // retuns undefined - var x hoisted - var declaration is hoisted , not the hoisting 
var x=10;
console.log(x); //this return 10

//Let Hoisting

console.log(y); // retuns ReferenceError: Cannot access 'y' before initialization
//  - let y is hoisted - but it is in  Temporary dead Zone 
let y=10;
console.log(y); //this return 10

//const Hoisting

console.log(z); // retuns ReferenceError: Cannot access 'z' before initialization
//  - const z is hoisted - but it is in  Temporary dead Zone 
const z=10;
console.log(z); //this return 10


