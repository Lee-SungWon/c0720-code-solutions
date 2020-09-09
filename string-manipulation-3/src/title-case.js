/* eslint-disable no-unused-vars */
function titleCase(title) {
  const minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  const arr = title.split(' ');
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let newWord = '';
    if (minor.includes(arr[i])) {
      newWord += arr[i][0];
    } else {
      newWord += arr[i][0].toUpperCase();
    }
    for (let j = 1; j < arr[i].length; j++) {
      newWord += arr[i][j];
    }
    newArr.push(newWord);
  }

  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j].toLowerCase === 'javascript') {
      const splice1 = newArr.splice(0, j);
      splice1.push('JavaScript');
      const splice2 = newArr.splice(1, newArr.length - 1);
      newArr = splice1.concat(splice2);
    }
  }

  return newArr.join(' ');
}
