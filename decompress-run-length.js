const decrompressRLElist = function (nums) {
  let decompressedList = [];
  // let freqArray = [];
  // let valArray = [];
  let i = 0;

  while (i < nums.length) {
    let n = 0;
    while (n < nums[i]) {
      decompressedList.push(nums[i + 1]);
      n++;
    }
    i += 2;
  }
  // console.log(decompressedList);
  return decompressedList;
  // let keys = Object.keys(decompressedObj);
  // console.log(keys);

  // keys.forEach((key) => {
  //   let n = 0;
  //   while (n < parseInt(key)) {
  //     decompressedList.push(decompressedObj[key]);
  //     n++;
  //   }
  // });

  // return decompressedList;
};

console.log(decrompressRLElist([3, 2, 2, 4]));
