/* eslint-disable no-unused-vars */

function flatten(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === false) {
      newArr.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        newArr.push(array[i][j]);
      }
    }
  }
  return newArr;
}
