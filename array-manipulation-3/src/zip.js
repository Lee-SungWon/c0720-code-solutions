/* eslint-disable no-unused-vars */
function zip(first, second) {
  let longerArrayLength;
  if (first.length < second.length) {
    longerArrayLength = first.length;
  } else {
    longerArrayLength = second.length;
  }

  const newArr = [];
  for (let i = 0; i < longerArrayLength; i++) {
    const arr = [];
    arr.push(first[i], second[i]);
    newArr.push(arr);
  }
  return newArr;
}
