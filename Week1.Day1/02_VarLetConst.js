
// Using Var we can redeclare and reassign
var username="Divya"; //declaration
var username="Divya Rajendran redeclarion using var" ; //redeclaration
username="DivyaReassignment using var"; //reassignment
console.log(username);


//Using let we cannot redeclare , only reassignment is allowed

let uname="Divya"; //declaration
//let uname="Divya Rajendran"; //redeclaration - not allowed
uname="DivyaReassignmentuisng let"; //reassignment
console.log(uname);

//Using const we cannot redeclare and reassignment(Both are not allowed)

const accNum=87723232; //declaration
//const accNum=24244; //redeclaration - not allowed
//accNum=2323232; //reassignment - not allowed
console.log(accNum);