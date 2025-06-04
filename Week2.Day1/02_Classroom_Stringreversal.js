//String Reversal with one word
//Output :"faeltset"

let companyName1 = "Testleaf";
let output = "";
for (let index = companyName1.length-1; index >= 0; index--) {
  output = output + companyName1.charAt(index);
}
console.log("Reversed String using Method 1  :" + output);
//Method 2

let reverse1=companyName1.split("").reverse().join("");
console.log("Reversed String using Method 2 :" + reverse1);

//Method 3
let char=companyName1.split("");
let reverse2 = "";
for (let index = char.length-1; index >= 0; index--) {
  reverse2 = reverse2 + char[index];
}
console.log("Reversed String using Method3 :" + reverse2);
//Reverse a given String with multiple words
function reverse() {
  let countryName = "India is my country";
  let split = countryName.split(" ");
  console.log(split.toString());

  let output1 = "";

  split.forEach(function (words) {
    let revWord = "";

    for (let index = words.length-1; index >= 0; index--) {
      revWord = revWord + words.charAt(index);
    }
    output1 = output1 + revWord + " ";
  });
  console.log(output1);
}
reverse();
