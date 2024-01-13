// Question 3 -: write a program using javascript to get the maximum count of consecutive 1's in a given array
// input = [0,1,1,0,0,1,1,1,1,0,1,0,1]
// output = Maximum count of consecutive 1's:4



function maxOnes(arr){
  let maxCount = 0;
  let currentCount = 0;

  for (let num of arr){
    if(num === 1){
      currentCount++;
      maxCount = Math.max(maxCount,currentCount);

    }else{
      currentCount = 0;
    }
  }
  return maxCount;
}

const inputArr = [0,1,1,0,0,1,1,1,1,0,1,0,1];
const result = maxOnes(inputArr);

console.log(`Maximum count of consecutive 1's: ${result}`);