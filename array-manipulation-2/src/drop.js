/* eslint-disable no-unused-vars */
function drop(array, count) {
  let newArr = [];
  if (array.length > count) {
    for (let i = count; i < array.length; i++) {
      newArr.push(array[i]);
    }
  } else {
    newArr = array;
  }
  return newArr;
}
