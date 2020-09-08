/* eslint-disable no-unused-vars */
function unique(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
