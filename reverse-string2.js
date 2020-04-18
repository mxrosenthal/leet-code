const reverseStr = function (s, k) {
  let n = 0;
  let j = k;
  let res = '';
  while (n < s.length) {
    let numLeft = s.length - n;
    if (numLeft < k) {
      let reversed = s.slice(n, s.length).split("").reverse().join(""); //if there are less than k letters left. just reverse all of them.
      res += reversed;
    } else {
      let reversed = s.slice(n, j).split("").reverse().join(""); //keep the first section of the string that needs to be reversed
      let doNotChange = s.slice(j, j + k); //rest of the string that doesn't need to be reversed.
      res += reversed + doNotChange;
    }
    n += 2 * k;
    j += 2 * k;
  }
  return res;
}

console.log(reverseStr('0123456789a', 3))