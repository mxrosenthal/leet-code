// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1

const singleNumber = function (nums) {
  let x = {}
  for (const num of nums) {
    x[num] ? delete x[num] : x[num] = 1
  }
  return Object.keys(x)[0]
}

console.log(singleNumber([1, 1, 2, 4, 3, 5, 6, 4, 3, 5, 2]))