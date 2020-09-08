/* eslint-disable no-unused-vars */
function intersection(first, second) {
  const newArr = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  return newArr;
}
