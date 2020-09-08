/* eslint-disable no-unused-vars */
function difference(first, second) {
  const newArr = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      newArr.push(second[i]);
    }
  }
  return newArr;
}
