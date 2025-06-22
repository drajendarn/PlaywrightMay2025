//Classroom activity in intersection of array

let arr1 = [1, 4, 6, 8, 9];
let arr2 = [2, 1, 3, 4, 6];

//Intersection array should includeelements that appaear in both arrays without any duplicate
let output = [];
let intersection = (arr1, arr2) => {
 
  for (let i = 0; i <= arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        output.push(arr1[i]);
      }
    }
  }
  console.log(output);
};

intersection(arr1, arr2);
//intersection([2,4,5,1,3,6], [2,6,3,2,4]);
//intersection([2.4,10], [11]);
