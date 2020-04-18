// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.



// Example 1:


// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10

const getDecimalValue = function (head) {
  let binaryArray = [];
  binaryArray.push(head.val);

  while (head.next) {
    head = head.next;
    binaryArray.push(head.val)
  }
  binaryArray.reverse();
  let ind = 0;
  let sum = 0;
  for (const num of binaryArray) {
    sum += num * Math.pow(2, ind);
    console.log(sum)
    ind++
  }
  return sum;
};

console.log(getDecimalValue([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]))