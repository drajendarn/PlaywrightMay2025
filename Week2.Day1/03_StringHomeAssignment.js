
/* Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 */

let s="Hello World";
let length=s.slice(6).length;
console.log("The Length of word 'World' is "+ length);

/* Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4. */
let n = " fly me to the moon ";
let split=n.trim().split(" ");
console.log(split);

let lastword=split[split.length-1];
console.log('Last word is : ' + lastword);
console.log(`Length of ${lastword} is : ` + lastword.length);

//To get length of all the words
console.log("Length of all the words");

split.forEach(element => {
   console.log(element.length);
});


/* Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters */

function isAnagram(str1, str2) {
  // Remove whitespace and convert to lowercase for case-insensitive comparison
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // If lengths differ, they can't be anagrams
  if (str1.length !== str2.length) return false;

  // Sort and compare
  const sorted1 = str1.split('').sort().join('');
  const sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2;
}

console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world'));   // false
console.log(isAnagram('Triangle', 'Integral')); // true
console.log(isAnagram('Debit Card', 'Bad Credit')); // true

//Palindrome
function isPalindrome(value)
{

    let reversedValue="";
    for(let i=value.length-1;i>=0;i--)
    {
     reversedValue=reversedValue+value.charAt(i);
    }
    if(value===reversedValue)
    {
        console.log("The Given String is palindrome");
    }
        else    
        {   
        console.log("The Given String is not a palindrome");
        
    }
}
isPalindrome('listen');
isPalindrome('value');
isPalindrome('madam');
