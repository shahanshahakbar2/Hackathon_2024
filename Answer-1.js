// Question 1 -:  Write a program to segregate the 0's and 1's in a given array ?
// input = [0,1,1,0,1,0,1,0,0,1,0,1]

// output = [0, 0, 0, 0, 0,0, 1, 1, 1, 1,1, 1]

function segregate(arr){
  let zeroCount = 0;

  // Count the number of zeros and update the array

  for (let i = 0; i<arr.length; i++){
    if(arr[i] === 0){
      zeroCount++;
      arr.splice(i,1); // Remove 0 from the current position
      i-- // adjust the index after removal
    }
  }


// Add zeros to the beginning of the array

for (let i = 0;i <zeroCount; i++){
  arr.unshift(0)
}

return arr;

}

// Example usage:

const inputArray = [0,1,1,0,1,0,1,0,0,1,0,1];
const result = segregate(inputArray);

console.log(result);