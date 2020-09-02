/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  let newWord = '';
  let lowerCase = '';
  for (let i = 0; i < word.length; i++) {
    lowerCase += word[i].toLowerCase();
  }
  if (lowerCase === 'javascript') {
    newWord = 'JavaScript';
  } else {
    newWord = word[0].toUpperCase();
    for (let i = 1; i < word.length; i++) {
      newWord += word[i].toLowerCase();
    }
  }
  return newWord;
}
