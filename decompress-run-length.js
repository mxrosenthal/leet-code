const decrompressRLElist = function (nums) {
  let decompressedList = [];

  let i = 0;
  while (i < nums.length) {
    let n = 0;
    while (n < nums[i]) {
      decompressedList.push(nums[i + 1]);
      n++;
    }
    i += 2;
  }
  return decompressedList;
};

console.log(decrompressRLElist([3, 2, 2, 4]));
