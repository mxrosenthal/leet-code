// input: [1,2,3,4,5,6,7,8,1,5]
// output: 1

// input: [1,2,3,4]
// output: undefined

const firstRecurring = (inputArray) => {
  let objToFill = {};
  for (const item of inputArray) {
    if (!objToFill[item]) {
      objToFill[item] = true;
    } else {
      return item;
    }
  }
  return undefined;
};
console.log(firstRecurring([1, 2, 2, 4, 5, 6, 7, 8, 1, 5]));
console.log(firstRecurring([1, 2, 3, 4, 5]));
