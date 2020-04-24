const matrixBlockSum = function (mat, K) {
  let resultMatrix = [];

  for (let i = 0; i < mat.length; i++) {
    //you can't instantiate a 2D array but you can instantiate a new array to push into the first array as a new row.
    let newRow = [];

    for (let j = 0; j < mat[i].length; j++) {
      let bottom = K * -1;
      let sum = 0;
      //loop through a square of length K surounding the current index and push each value into an array. Ignore undefined values.
      for (let m = bottom; m <= K; m++) {
        for (let n = bottom; n <= K; n++) {
          let row = i + m;
          let col = j + n;
          if (col < mat[i].length && row < mat.length && col >= 0 && row >= 0) {
            sum += mat[row][col];
          }
        }
      }
      newRow.push(sum);
    }
    resultMatrix.push(newRow);
  }
  return resultMatrix;
};

const mat3 = [
  [67, 64, 78],
  [99, 98, 38],
  [82, 46, 46],
  [6, 52, 55],
  [55, 99, 45],
];
const t = 3;
console.log(matrixBlockSum(mat3, t));
