const removeVowels = function (str) {
  let newString = ''
  if (str) {
    newString = str.split('').filter(letter => !['a', 'e', 'i', 'o', 'u'].includes(letter)).join('')
  }

  return newString;
}

console.log(removeVowels('automobile'));
console.log(removeVowels('Mr. Danger Carriage'));