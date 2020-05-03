const rankTeams = function (votes) {
  let voteObj = {};

  for (const vote of votes) {
    let voteArray = vote.split('');
    console.log(vote);
    let n = 0;
  }
};

const votings = ['WXYZ', 'XYZW'];
// Output: "XWYZ"
console.log(rankTeams(votings));
