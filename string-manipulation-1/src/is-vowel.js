/* eslint-disable no-unused-vars */
function isVowel(char) {
  const newChar = char.toLowerCase();
  if (newChar === 'a' || newChar === 'e' || newChar === 'i' || newChar === 'o' || newChar === 'u') {
    return true;
  } else {
    return false;
  }
}
