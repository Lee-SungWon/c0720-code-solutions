/* eslint-disable no-unused-vars */
function firstChars(length, string) {
  const arr = string.split('');
  let newStr = '';
  if (length > string.length) {
    newStr = string;
  } else {
    for (let i = 0; i < length; i++) {
      newStr += arr[i];
    }
  }
  return newStr;
}
