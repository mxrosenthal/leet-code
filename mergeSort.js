const mergeSort = (arr1, arr2) => {
  let totalArr = arr1.concat(arr2);
  totalArr.sort((a, b) => a - b);
  return totalArr;
};

m = [1, 3, 4, 5, 6, 9];
n = [5, 8, 9];
console.log(mergeSort(m, n));
