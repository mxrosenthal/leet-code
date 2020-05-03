// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]

const smallerNumbersThanCurrent = function (nums) {
  // make a copy of the incomming array
  let x = [...nums];
  // sort the copy (smallest to largest)
  let sorted = x.sort((a, b) => a - b);
  // instantiate solution array
  let solution = [];

  // for each number in nums array, find the first instance of that number in the sorted array and push it's index into solution array.
  for (const num of nums) {
    solution.push(sorted.indexOf(num));
  }

  return solution;
};

// const smallerNumbersThanCurrent = function (nums) {
//   let sortedNums = nums.sort((a, b) => a > b);
//   console.log(sortedNums);

//   let firstNum = sortedNums[0];
//   let sameNumEncountered = 0;
//   let smallerThanArray = [];
//   // let n = 0;
//   sortedNums.forEach((num, ind) => {
//     if (ind === 0) {
//       smallerThanArray.push(ind);
//     } else if (num === firstNum) {
//       sameNumEncountered++;
//       smallerThanArray.push(ind - sameNumEncountered);
//     } else {
//       sameNumEncountered = 0;
//       firstNum = num;
//       smallerThanArray.push(ind);
//     }
//     // n++;
//   });

// let numberObj = {};
// for (const num of nums) {
//   numberObj[num] ? numberObj[num]++ : (numberObj[num] = 1);
// }
// console.log('number obj: ', numberObj);

// let sortedNums = Object.keys(numberObj);
// let smallerThanObj = {};
// sortedNums.forEach((number, index) => {
//   smallerThanObj[number] = index;
// });
// console.log('smallerThan: ', smallerThanObj);

// let smallerThanArray = [];
// nums.forEach((num, index) => {
//   smallerThanArray.push(smallerThanObj[num]);
// });
// console.log('result: ', smallerThanArray);
// return smallerThanArray;
// };

const numbers = [6, 5, 5, 4, 4, 8, 8];
console.log(smallerNumbersThanCurrent(numbers));
