const numJewelsInStones = function (J, S) {
  //create an obj with the stones you have (S)
  let myStonesObj = {};
  // let myStones = S.split('');
  // for (const stone of myStones) {
  for (let i = 0; i < S.length; i++) {
    myStonesObj[S[i]] ? (myStonesObj[S[i]] += 1) : (myStonesObj[S[i]] = 1);
  }

  let totalGems = 0;
  // let gems = J.split('');
  for (let j = 0; j < J.length; j++) {
    myStonesObj[J[j]] ? (totalGems += myStonesObj[J[j]]) : null;
  }

  return totalGems;
};
