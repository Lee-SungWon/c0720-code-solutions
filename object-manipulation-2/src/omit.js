/* eslint-disable no-unused-vars */
const omit = (source, keys) => {
  const obj = {};

  let counter = 0;

  for (const property in source) {
    for (let i = 0; i < keys.length; i++) {
      if (property !== keys[i]) {
        counter++;
      }
    }
    if (counter === keys.length) {
      obj[property] = source[property];
    }
    counter = 0;
  }

  return obj;
};
