/* eslint-disable no-unused-vars */
function take(array, count) {
  let newArr = [];
  if (array.length > count) {
    for (let i = 0; i < count; i++) {
      newArr.push(array[i]);
    }
  } else {
    newArr = array;
  }
  return newArr;
}
