/* eslint-disable no-unused-vars */
const pick = (source, keys) => {

  const obj = {};

  for (const property in source) {
    for (let i = 0; i < keys.length; i++) {
      if (property === keys[i]) {
        obj[keys[i]] = source[keys[i]];
      }
    }
  }

  return obj;
};
