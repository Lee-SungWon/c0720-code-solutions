/* eslint-disable no-unused-vars */
function isUpperCased(word) {
  let newWord = '';
  for (let i = 0; i < word.length; i++) {
    newWord += word[i].toUpperCase();
  }
  if (word === newWord) {
    return true;
  } else {
    return false;
  }
}
