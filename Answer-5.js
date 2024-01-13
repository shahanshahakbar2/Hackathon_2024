// Question 5-: write a program using javascript to check repeated characters in given string or not
// a. Test
// b. Welcome
// c. More
// d. Knowledge

function repeatedChar(str){
  const charSet = new Set();

  for (let char of str){
    if(charSet.has(char)){
      //if character is already encountered, it's repeated
      return true;
    }
    charSet.add(char);
  }

  // No repeated characters found
  return false;
}

const testReslt = repeatedChar("Test");
const welcmReslt = repeatedChar("Welcome");
const moreReslt = repeatedChar("More");
const knowReslt = repeatedChar("Knowledge");

//output

console.log("a. Test :",testReslt);
console.log("b. Welcome :",welcmReslt);
console.log("c. More :",moreReslt);
console.log("d .Knowledge :",knowReslt);
