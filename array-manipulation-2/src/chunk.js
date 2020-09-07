/* eslint-disable no-unused-vars */

/*
chunk(['foo', 'bar', 'baz', 'qux'], 2);
// -> [["foo", "bar"], ["baz", "qux"]]
chunk([1, 2, 3, 4, 5], 1);
// -> [[1], [2], [3], [4], [5]]
chunk([false, true, false, true], 3);
// -> [[false, true, false], [true]]
*/

const chunk = (array, size) => {
  let arr = [];
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i]);
    if (arr.length === size || i === array.length - 1) {
      newArr.push(arr);
      arr = [];
    }
  }
  return newArr;
};
