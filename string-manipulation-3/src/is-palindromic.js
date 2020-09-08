/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  const strNoSpace = string.split(' ').join('');
  let newStr = '';
  for (let i = strNoSpace.length - 1; i >= 0; i--) {
    newStr += strNoSpace[i];
  }
  if (newStr === strNoSpace) {
    return true;
  } return false;
}

/*
for strings, remember:
1) .length counts spaces in addition to characters
2) .split / .join || string.split(' ').join('');
*/
