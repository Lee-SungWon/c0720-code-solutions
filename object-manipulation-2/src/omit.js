/* eslint-disable no-unused-vars */
const omit = (source, keys) => {
  const obj = {};

  const placeholderArr = [];

  let counter = 0;

  for (const property in source) {
    placeholderArr.push(property);
  }

  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < placeholderArr.length; j++) {
      if (keys[i] !== placeholderArr[j]) {
        counter++;
      }
    }
    if (counter === placeholderArr.length) {
      obj[keys[i]] = source[keys[i]];
      counter = 0;
    }
  }
  return obj;
};
