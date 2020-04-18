const reverseVowels = function (s) {
  let newString = '';
  let strVowels = [];

  for (const letter of s) {
    if (['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase())) {
      strVowels.push(letter);
      newString += '_';
    } else {
      newString += letter;
    }
  }

  newStringArr = newString.split('');
  // let j = strVowels.length - 1;
  for (let i = 0; i < newStringArr.length; i++) {
    if (newStringArr[i] === '_') {
      newStringArr[i] = strVowels.pop();
      // j--;
    }
  }
  newString = newStringArr.join('');
  return newString;
}

console.log(reverseVowels('abcdefghi'))
console.log(reverseVowels('aA'))

// SOLUTION
// var reverseVowels = function(s) {
//   if(s.length===0) return "";
//   let obj={a:1,e:1,i:1,o:1,u:1,A:1,E:1,I:1,O:1,U:1},
//   vow=[],
//     res="";    

// //Push all vowels to a stack:
//   for(let i=0;i<s.length;i++){
//       if(obj[s.charAt(i)]) vow.push(s.charAt(i));
//   }

// //Rearranging str:
//   for(let el of s){
//       if(obj[el]) res+=vow.pop();
//       else res+=el;
//   }
//   return res;

// };