/* eslint-disable no-unused-vars */
function takeRight(array, count) {
  let newArr = [];
  if (array.length > count) {
    for (let i = array.length - count; i < array.length; i++) {
      newArr.push(array[i]);
    }
  } else {
    newArr = array;
  }
  return newArr;
}
