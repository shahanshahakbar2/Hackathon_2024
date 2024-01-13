// Question 2-: write a program to check the given string is palindrome or Not  
// input = malayalam
// input = english

// output = malayalam is Palindrome: true
// output = english is palindrome: false

function palindrome(str){
  // Remove non-alphanumeric characters and convert to lowercase

  const newStr = str.replace(/[^a-zA-Z-0-9]/g,'').toLowerCase();

  // Compare  original and reversed strings

  const revrsStr = newStr.split('').reverse().join('');

  return newStr === revrsStr;
}



const input1 = "malayalam";
const input2 = "english";

//output

console.log(`${input1} is Palindrome:${palindrome(input1)}`);
console.log(`${input2} is palindrome:${palindrome(input2)}`);