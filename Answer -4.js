//Question 4-:
// write a program using javascript to    reverse any given string using recursion
// Without using reverse method
// input = welcome
// output = emoclew

function reverStr(str){
  if(str === ""){
    return str;
  }else{
    return reverStr(str.substr(1)) + str[0];
  }
}

const inputStr = "welcome";
const reversdStr = reverStr(inputStr);

console.log(`Original String: ${inputStr}`);
console.log(`Reversed String: ${reversdStr}`);