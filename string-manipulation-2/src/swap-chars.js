/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  const arr = string.split('');
  const placeholder = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = placeholder;
  const newStr = arr.join('');
  return newStr;
}
