/* eslint-disable no-unused-vars */
const equal = (first, second) => {
  let counter = 0;
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      counter++;
    }
  }
  if (counter === 0) {
    return true;
  }
  return false;
};
