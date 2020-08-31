/* eslint-disable no-unused-vars */
function capitalize(word) {
  let newWord = '';
  newWord = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  return newWord;
}
