let alp1=['a','x','a','b','c']; //Using Array literal

let alp2=new Array(3); // using Array object or Constructor
alp2=['a','b','c'];
console.log(alp1===alp2);

//Sorting
alp1.sort();
console.log(alp1);

let arr1 = [1, 4, 6, 8, 9];
let arr2 = [2, 1, 3, 4, 6,8];
 arr1.sort((a, b) => a - b); //ascending
arr2.sort((a, b) => b-a);// descending
  console.log(arr1);
  console.log(arr2);