/* eslint-disable no-unused-vars */
function lastChars(length, string) {
  const arr = string.split('');
  let newStr = '';
  if (length > string.length) {
    newStr = string;
  } else {
    for (let i = string.length - length; i < string.length; i++) {
      newStr += arr[i];
    }
  }
  return newStr;
}
