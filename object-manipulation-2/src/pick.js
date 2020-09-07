/* eslint-disable no-unused-vars */
const pick = (source, keys) => {

  const obj = { };

  const placeholderArr = [];

  for (const property in source) {
    placeholderArr.push(property);
  }

  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < placeholderArr.length; j++) {
      if (keys[i] === placeholderArr[j]) {
        obj[keys[i]] = source[keys[i]];
      }
    }
  }

  return obj;
};
