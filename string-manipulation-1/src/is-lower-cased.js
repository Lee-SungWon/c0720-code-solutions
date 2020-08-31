/* eslint-disable no-unused-vars */
function isLowerCased(word) {
  let newWord = '';
  for (let i = 0; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  if (word === newWord) {
    return true;
  } else {
    return false;
  }
}
