
// 1. Named function

function fun1()
{
    console.log("Named Function");
    
}
fun1()
//Named function with return value
function fun2()
{
    let a=5;
    let b=15;
    return a+b;
}
console.log(fun2());


//2. Anonymous function or function expression

let anonymosFun1=function()
{
    console.log("This is anonymous function");
    
}
anonymosFun1();
//anonymous function with return value
let anonymosFun2=function()
{
    let a=15;
    let b=15;
    return a+b;
    
}
console.log(anonymosFun2());

//3.Arrow function
let arrowFunc=()=>
{
    console.log("This is arrow function");
    
}
arrowFunc();

