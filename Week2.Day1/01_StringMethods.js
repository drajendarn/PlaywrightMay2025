

//Escape sequence

let type='It\'s a regression case ';
let  tests="It\'s a \"regression\" case";
console.log(type);
console.log(tests);

//concatination

let Fname='Divya';
let Lname='Rajendran';
let age=34;

let result=Fname.concat(Lname);
let result1=Fname.concat(Lname).toString().concat(age);
let result3=Fname+Lname+age;
console.log(result);
console.log(result1);
console.log(result3);

//template litral - `${}

let testcase=200;
let output=`Total ${testcase} testcases`
console.log(output);

//length - length starts from 1 and index starts from 0

let courseName="Playwright";
console.log(`Total length of ${courseName} is ${courseName.length} `);

//charAt
console.log(`charAt of ${courseName} is ${courseName.charAt(0)} `);

//index of
console.log(`index of ${courseName} is ${courseName.indexOf('P')} `);
//includes - returns true or false
console.log(`Includes of ${courseName} is ${courseName.includes('P')} `);
console.log(`Includes of ${courseName} is ${courseName.includes('x')} `);

//Split

let companyName='QEagle Assurance Ltd';
let splitV=companyName.split(" ");
console.log(splitV);

//Slice - start index included and end index char will not be printed
let slice=companyName.slice(1,4); // 1- start index and 4 is end index
console.log(slice); //Eag
let slice1=companyName.slice(1); // 1- start index
console.log(slice1); //Eagle Assurance Ltd
let negSlice=companyName.slice(-3,-1); // reverse order
console.log(negSlice); //lt

//SubString 
let sub=companyName.substring(1,4); // 1- start index and 4 is end index
console.log(sub); 
let subRev=companyName.substring(4,1); //reverse order is not supported 
console.log(subRev);

let subNeg=companyName.substring(-1,4); // 1- start index and 4 is end index
console.log(subNeg); 


/* Note: 1. Similar to Slice
2. start index included and end index char will not be printed
3.Does not support negative index instead treats as 0*/