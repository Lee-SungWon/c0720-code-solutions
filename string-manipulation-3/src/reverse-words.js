/* eslint-disable no-unused-vars */
function reverseWords(string) {
  const arr = string.split(' ');
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newWord = '';
    for (let j = arr[i].length - 1; j >= 0; j--) {
      newWord += arr[i][j];
    }
    newArr.push(newWord);
  }
  return newArr.join(' ');
}
