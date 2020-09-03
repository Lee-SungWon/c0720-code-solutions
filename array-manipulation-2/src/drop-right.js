/* eslint-disable no-unused-vars */
function dropRight(array, count) {
  let newArr = [];
  if (array.length > count) {
    for (let i = 0; i < array.length - count; i++) {
      newArr.push(array[i]);
    }
  } else {
    newArr = array;
  }
  return newArr;
}
